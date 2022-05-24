// react
import { useState } from 'react'
// components
import Button from '../Button'
// styles
import './formTimer.css'
export default function FormTimer ({ setTimeState, handleStart, setTimerReset, setIsEdit }) {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault()
    if (min || sec !== 0) {
      const timeSetted = +min + +sec
      setTimeState(timeSetted)
      setTimerReset(timeSetted)
      window.localStorage.setItem('user-settings', JSON.stringify({ time: timeSetted }))
    }
    handleStart()
  }

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
  return (
    <article className='form-timer'>
      <h3>Set Timer</h3>
      <form onSubmit={handleSubmit}>
        min
        <input type='text' onChange={handleChangeMin} />
        sec
        <input type='text' onChange={handleChangeSec} />
        <button>Establecer</button>
      </form>
      <Button onClick={handleCancel}>Cancelar</Button>
    </article>
  )
}
