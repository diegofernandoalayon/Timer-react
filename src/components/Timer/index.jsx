import { useState, useEffect, useRef } from 'react'
export default function Timer ({ time = 0 } = {}) {
  const [timeState, setTimeState] = useState(time)
  const [timerOn, setTimerOn] = useState(false)
  const [timeUser, setTimerUser] = useState(0)
  const interval = useRef(0)
  let con = 0
  const startTimer = () => {
    interval.current = setInterval(() => {
      con++
      const dis = timeState - con
      // console.log(con)
      // console.log('tood')
      if (dis <= 0) {
        clearInterval(interval.current)
      }
      setTimeState(dis)
    }, 1000)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    console.log(timeUser)
    setTimerUser(event.target.value)
  }

  const handleStart = () => {
    setTimerOn(true)
  }

  const handlePause = () => {
    setTimerOn(false)
  }

  const handleReset = () => {
    setTimerOn(false)
    setTimeState(time)
  }
  useEffect(() => {
    if (timerOn) {
      startTimer()
    } else {
      clearInterval(interval.current)
    }

    return () => clearInterval(interval.current)
  }, [timerOn])

  return (
    <>
      <h2>{timeState}</h2>
      <input type='text' onChange={handleChange} />
      <button onClick={handleStart}>iniciar</button>
      <button onClick={handlePause}>parar</button>
      <button onClick={handleReset}>Reset</button>

    </>

  )
}
