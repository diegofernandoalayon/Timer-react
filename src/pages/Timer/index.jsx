// react
import { useState, useEffect, useRef } from 'react'
import Button from '../../components/Button'
// components
import DisplayTimer from '../../components/DisplayTimer'
import FormTimer from '../../components/FormTimer'
export default function Timer () {
  const [timerReset, setTimerReset] = useState(0)
  const [timeState, setTimeState] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const interval = useRef(0)
  let con = 0
  const startTimer = () => {
    interval.current = setInterval(() => {
      con++
      const dis = timeState - con
      if (dis <= 0) {
        clearInterval(interval.current)
        setTimerOn(false)
      }
      setTimeState(dis)
    }, 1000)
  }

  const handleStart = () => {
    setTimerOn(true)
    setIsEdit(false)
  }

  const handlePause = () => {
    setTimerOn(false)
  }

  const handleReset = () => {
    setTimerOn(false)
    // setTimeState(0)
    // const timeSetted = +min + +sec
    // setTimeState(timeSetted)
    setTimeState(timerReset)
  }
  const handleEdit = () => {
    setIsEdit(true)
  }
  useEffect(() => {
    const userSettings = window.localStorage.getItem('user-settings')
    if (userSettings) {
      const { time } = JSON.parse(userSettings)

      setTimeState(time)
      setTimerReset(time)
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
    <article>
      {
        isEdit
          ? <FormTimer
              setTimeState={setTimeState}
              handleStart={handleStart}
              setTimerReset={setTimerReset}
              setIsEdit={setIsEdit}
            />
          : <DisplayTimer minutes={minutes} seconds={seconds} />
      }
      {
        !isEdit && (!timerOn ? <button onClick={handleStart}>iniciar</button> : <button onClick={handlePause}>parar</button>)

      }

      {
        !isEdit && <button onClick={handleReset}>Reset</button>
      }
      {
        !isEdit && <Button onClick={handleEdit}>Edit</Button>
      }

    </article>

  )
}
