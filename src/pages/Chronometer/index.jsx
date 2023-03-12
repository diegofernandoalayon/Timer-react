// react
import { useState, useEffect, useRef } from 'react'
// components
import Button from '../../components/Button'
import DisplayTimer from '../../components/DisplayTimer'
// stylesheet
import './chronometer.css'

const Chronometer = () => {
  const [timeState, setTimeState] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const interval = useRef(0)
  const startChronometer = () => {
    interval.current = setInterval(() => {
      setTimeState((a) => a + 1)
    }, 1000)
  }
  useEffect(() => {
    if (timerOn) {
      startChronometer()
    } else {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [timerOn])

  const handleStart = () => {
    setTimerOn(true)
  }

  const handlePause = () => {
    setTimerOn(false)
  }

  const handleReset = () => {
    setTimerOn(false)
    setTimeState(0)
  }
  // extraer los segundo y minutos para mostrar
  const hours = Math.floor((timeState % (60 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((timeState % (60 * 60)) / (60))
  const seconds = Math.floor((timeState % 60))
  document.title = `${minutes}:${seconds} Chronometer`
  console.log('this is hours:', hours)

  return (
    <article>
      <DisplayTimer hours={hours} minutes={minutes} seconds={seconds} />
      <div className='btn-chronometer'>
        {
          !timerOn
            ? <Button onClick={handleStart}>iniciar</Button>
            : <Button onClick={handlePause} isPaused>parar</Button>

        }
        <Button onClick={handleReset}>Reset</Button>
      </div>

    </article>

  )
}
export default Chronometer
