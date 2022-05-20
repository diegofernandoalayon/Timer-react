import { useState, useEffect, useRef } from 'react'
import DisplayTimer from '../../components/DisplayTimer'
import FormTimer from '../../components/FormTimer'
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
    if (min || sec !== 0) {
      const timeSetted = +min + +sec
      setTimeState(timeSetted)
      window.localStorage.setItem('user-settings', JSON.stringify({ time: timeSetted }))
    }
  }

  const handlePause = () => {
    setTimerOn(false)
  }

  const handleReset = () => {
    setTimerOn(false)
    // setTimeState(0)
    const timeSetted = +min + +sec
    setTimeState(timeSetted)
  }
  const handleEdit = () => {
    console.log('hello world')
  }
  useEffect(() => {
    const userSettings = window.localStorage.getItem('user-settings')
    if (userSettings) {
      const { time } = JSON.parse(userSettings)

      setTimeState(time)
    }
  }, [])
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
  document.title = `${minutes}:${seconds} Timer`

  return (
    <>
      <FormTimer handleChangeMin={handleChangeMin} handleChangeSec={handleChangeSec} />
      <DisplayTimer minutes={minutes} seconds={seconds} />

      {
        !timerOn ? <button onClick={handleStart}>iniciar</button> : <button onClick={handlePause}>parar</button>
      }

      <button onClick={handleReset}>Reset</button>
      <button onClick={handleEdit}>Edit</button>

    </>

  )
}
