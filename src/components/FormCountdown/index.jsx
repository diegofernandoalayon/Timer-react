import { useState } from 'react'
import './formCountdown.css'
import Button from '../Button'
const FormCountdown = ({ handleSetted, handleCancel }) => {
  const [date, setDate] = useState('')
  const [time, setTimer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(`${date} ${time}`)
    handleSetted(`${date} ${time}`)
  }
  const handleTime = (e) => {
    // console.log(e.target.value)
    setTimer(e.target.value)
  }
  const handleDate = (e) => {
    // console.log(e.target.value) // yyyy-MM-dd
    const { value } = e.target
    setDate(value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form-countdown'>
        <div className='form-countdown-inputs'>
          <label >fecha
            <input required type="date" onChange={handleDate}/>
          </label>
          <label >hora
            <input required type="time" value={time} onChange={handleTime}/>
          </label>
        </div>
        <div className='form-countdown-buttons'>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button submit>Establecer</Button>
        </div>

      </form>
    </div>
  )
}

export default FormCountdown
