import { useState, useEffect, useRef, useContext } from 'react'
// import DisplayTimer from '../../components/DisplayTimer'
import Button from '../../components/Button'
import DisplayCountdown from '../../components/DisplayCountdown'
import FormCountdown from '../../components/FormCountdown'
import audio1 from '../../audio/timer.wav'
import { SettingsContext } from '../../context/SettingsContext'

function Countdown () {
  const [timeState, setTimeState] = useState(0)
  const [timeRef, setTimeRef] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const { isMuted } = useContext(SettingsContext)
  const interval = useRef(0)
  const startTimer = () => {
    const distance = +timeRef - +new Date().getTime()
    if (distance <= 0) return
    setTimeState(distance)
    interval.current = setInterval(() => {
      const dis = +timeRef - +new Date().getTime()
      if (dis <= 0) {
        clearInterval(interval.current)
        if (!isMuted) {
          const audioo = new Audio(audio1)
          audioo.play()
        }
        return
      }
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
  const handleSetted = (newDate) => {
    const count = new Date(newDate).getTime()
    const userSettings = window.localStorage.getItem('user-settings')
    setTimeRef(count)
    const userSettingsParsed = JSON.parse(userSettings)
    window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, count }))
    setIsEditing((ac) => !ac)
  }
  const handleCancel = () => {
    setIsEditing((ac) => !ac)
  }
  const handleClick = () => {
    setIsEditing((ac) => !ac)
    // const count = new Date('Jun 14, 2023 23:59:00').getTime()
    // const userSettings = window.localStorage.getItem('user-settings')
    // setTimeRef(count)
    // const userSettingsParsed = JSON.parse(userSettings)
    // window.localStorage.setItem('user-settings', JSON.stringify({ ...userSettingsParsed, count }))
  }
  const days = Math.floor(timeState / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeState % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeState % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeState % (1000 * 60)) / 1000)

  document.title = `${days > 0 ? days + ':' : ''}${hours > 0 || days > 0 ? hours + ':' : ''}${minutes}:${seconds} | Countdown`
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
        {
          isEditing && <FormCountdown handleSetted={handleSetted} handleCancel={handleCancel}/>
        }

      </section>
    </>
  )
}

export default Countdown
