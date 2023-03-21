// react
import { useState, useEffect, useRef } from 'react'
// components
import Button from '../../components/Button'
import DisplayTimer from '../../components/DisplayTimer'
import TimeForm from '../../components/TimeForm'
// import FormTimer from '../../components/FormTimer'
// stylesheet
import './timer.css'
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
    setTimeState(timerReset)
  }
  const handleEdit = () => {
    setIsEdit((ac) => !ac)
  }
  const handleEditSetted = (time) => {
    setTimeState(time)
    setTimerReset(time)
    const userSettings = window.localStorage.getItem('user-settings')
    const userSettingsParsed = JSON.parse(userSettings)
    window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, time }))
  }
  useEffect(() => {
    const userSettings = window.localStorage.getItem('user-settings') // ?? JSON.stringify({ time: 0 })
    if (!userSettings) return
    console.log(userSettings)

    const { time } = JSON.parse(userSettings)
    if (time) {
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
  const hours = Math.floor((timeState % (60 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((timeState % (60 * 60)) / (60))
  const seconds = Math.floor((timeState % 60))
  document.title = `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds} Timer`

  return (
    <article>
      {
        isEdit
          ? <TimeForm
              title='Set Timer'
              handleStart={handleStart}
              handleEditSetted={handleEditSetted}
              handleEdit={handleEdit}
              initialHours={hours}
              initialMinutes={minutes}
              initialSeconds={seconds}
            />
          : <DisplayTimer hours={hours} minutes={minutes} seconds={seconds} />
      }
      <div className='btn-timer'>
        {
          !isEdit &&
          (!timerOn
            ? <Button onClick={handleStart}>iniciar</Button>
            : <Button onClick={handlePause} isPaused>parar</Button>)

        }

        {
          !isEdit && <Button onClick={handleReset}>Reset</Button>
        }
        {
          !isEdit && <Button onClick={handleEdit}>Edit</Button>
        }

      </div>

    </article>

  )
}
