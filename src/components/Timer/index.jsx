import { useState, useEffect, useRef } from 'react'
import DisplayTimer from '../DisplayTimer'
import FormTimer from '../FormTimer'
export default function Timer () {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [timeState, setTimeState] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const interval = useRef(0)
  let con = 0
  const startTimer = () => {
    interval.current = setInterval(() => {
      con++
      const dis = timeState - con
      if (dis <= 0) {
        clearInterval(interval.current)
      }
      setTimeState(dis)
    }, 1000)
  }

  const handleChangeSec = (event) => {
    setSec(event.target.value)
  }
  const handleChangeMin = (event) => {
    const minToSec = event.target.value * 60
    setMin(minToSec)
  }
  const handleStart = () => {
    setTimerOn(true)
    const timeSetted = +min + +sec
    if (timeState === 0) {
      setTimeState(timeSetted)
    }
  }

  const handlePause = () => {
    setTimerOn(false)
  }

  const handleReset = () => {
    setTimerOn(false)
    setTimeState(0)
  }
  useEffect(() => {
    if (timerOn) {
      startTimer()
    } else {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [timerOn])
  // extraer los segundo y minutos para mostrar
  const minutes = Math.floor((timeState % (60 * 60)) / (60))
  const seconds = Math.floor((timeState % 60))

  return (
    <>
      <FormTimer handleChangeMin={handleChangeMin} handleChangeSec={handleChangeSec} />
      <DisplayTimer minutes={minutes} seconds={seconds} />

      {
        !timerOn ? <button onClick={handleStart}>iniciar</button> : <button onClick={handlePause}>parar</button>
      }

      <button onClick={handleReset}>Reset</button>

    </>

  )
}
