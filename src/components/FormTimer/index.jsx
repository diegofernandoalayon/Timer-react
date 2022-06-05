// components
import Button from '../Button'
import InputTimerForm from '../InputTimerForm'
// custom hooks
import useForm from '../../hooks/useForm'
// styles
import './formTimer.css'
export default function FormTimer ({ setTimeState, handleStart, setTimerReset, setIsEdit, initialMinutes, initialSeconds }) {
  const {
    minutes,
    seconds,
    updateMinutes,
    updateSeconds,
    incrementMinutes,
    decrementMinutes,
    incrementSeconds,
    decrementSeconds
  } = useForm({ initialMinutes, initialSeconds })
  const handleSubmit = (event) => {
    event.preventDefault()
    if (minutes || seconds !== 0) {
      const timeSetted = +minutes * 60 + +seconds
      setTimeState(timeSetted)
      setTimerReset(timeSetted)
      window.localStorage.setItem('user-settings', JSON.stringify({ time: timeSetted }))
    }
    handleStart()
  }

  const handleCancel = () => {
    setIsEdit(false)
  }
  return (
    <article className='form-timer'>
      <h3>Set Timer</h3>
      <div className='form-timer-inputs'>
        <InputTimerForm
          title='minutes'
          value={minutes}
          update={updateMinutes}
          up={incrementMinutes}
          down={decrementMinutes}
        />
        <InputTimerForm
          title='seconds'
          value={seconds}
          update={updateSeconds}
          up={incrementSeconds}
          down={decrementSeconds}
        />
      </div>

      <div className='from-timer-buttons'>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit}>Establecer</Button>
      </div>
    </article>
  )
}
