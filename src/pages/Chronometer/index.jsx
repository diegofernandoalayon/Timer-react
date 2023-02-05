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
  let con = 0
  const startChronometer = () => {
    interval.current = setInterval(() => {
      con++
      const dis = timeState + con
      if (dis <= 0) {
        clearInterval(interval.current)
        setTimerOn(false)
      }
      setTimeState(dis)
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
  const minutes = Math.floor((timeState % (60 * 60)) / (60))
  const seconds = Math.floor((timeState % 60))
  document.title = `${minutes}:${seconds} Chronometer`

  return (
    <article>
      <DisplayTimer minutes={minutes} seconds={seconds} />
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
