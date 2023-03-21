import { useState, useEffect, useRef } from 'react'
// import DisplayTimer from '../../components/DisplayTimer'
import Button from '../../components/Button'
import DisplayCountdown from '../../components/DisplayCountdown'
function Countdown () {
  const [timeState, setTimeState] = useState(0)
  const [timeRef, setTimeRef] = useState(0)
  const interval = useRef(0)
  const startTimer = () => {
    setTimeState(+timeRef - +new Date().getTime())
    interval.current = setInterval(() => {
      setTimeState(+timeRef - +new Date().getTime())
    }, 1000)
  }
  useEffect(() => {
    const userSettings = JSON.parse(window.localStorage.getItem('user-settings'))
    if (!userSettings) return
    const { count } = userSettings
    if (count) setTimeRef(count)
  }, [])

  useEffect(() => {
    if (timeRef > 0) startTimer()
    return () => clearInterval(interval.current)
  }, [timeRef])
  const handleClick = () => {
    const count = new Date('Jun 14, 2023 23:59:00').getTime()
    const userSettings = window.localStorage.getItem('user-settings')
    setTimeRef(count)
    const userSettingsParsed = JSON.parse(userSettings)
    window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, count }))
  }
  const days = Math.floor(timeState / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeState % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeState % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeState % (1000 * 60)) / 1000)

  console.log(hours)
  return (
    <>
      <section>
          <DisplayCountdown
            days={days}
            hours ={hours}
            minutes={minutes}
            seconds={seconds}
          />

        <Button onClick={handleClick}>Establecer</Button>
      </section>
    </>
  )
}

export default Countdown
