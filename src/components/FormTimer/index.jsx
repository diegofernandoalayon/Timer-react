// react
import { useState } from 'react'
// components
import Button from '../Button'
import Up from '../Icons/Up'
import Down from '../Icons/Down'
// styles
import './formTimer.css'
export default function FormTimer ({ setTimeState, handleStart, setTimerReset, setIsEdit, minutes, seconds }) {
  const [min, setMin] = useState(minutes * 60)
  const [sec, setSec] = useState(seconds)
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   if (min || sec !== 0) {
  //     const timeSetted = +min + +sec
  //     setTimeState(timeSetted)
  //     setTimerReset(timeSetted)
  //     window.localStorage.setItem('user-settings', JSON.stringify({ time: timeSetted }))
  //   }
  //   handleStart()
  // }

  const handleChangeSec = (event) => {
    setSec(event.target.value)
  }
  const handleChangeMin = (event) => {
    const minToSec = event.target.value * 60
    setMin(minToSec)
  }
  const handleCancel = () => {
    console.log('to')
    setIsEdit(false)
  }
  console.log(min)
  return (
    <article className='form-timer'>
      <h3>Set Timer</h3>

      min
      <input type='text' onChange={handleChangeMin} value={min / 60} />
      sec
      <input type='text' onChange={handleChangeSec} value={sec} />
      <div>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button>Establecer</Button>
        <Up />
        <Down />
      </div>
    </article>
  )
}
