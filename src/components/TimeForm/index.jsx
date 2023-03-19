// components
import Button from '../Button'
import TimeInput from '../TimeInput'
// hooks
import useForm from '../../hooks/useForm'
// styles
import './timeForm.css'
const TimeForm = ({ initialHours, initialMinutes, initialSeconds, title, handleEdit, handleStart, handleEditSetted }) => {
  const {
    hours,
    minutes,
    seconds,
    updateHours,
    updateMinutes,
    updateSeconds,
    incrementHours,
    decrementHours,
    incrementMinutes,
    decrementMinutes,
    incrementSeconds,
    decrementSeconds
  } = useForm({ initialHours, initialMinutes, initialSeconds })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (minutes || seconds !== 0) {
      const timeSetted = (+hours * 60 * 60) + (+minutes * 60) + (+seconds)

      handleEditSetted(timeSetted)
    }
    handleStart()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='time-form'
    >
      <h3>{title}</h3>
      <div
        className='inputs-form'
      >
        <TimeInput
          title='hours'
          value={hours}
          update={updateHours}
          up={incrementHours}
          down={decrementHours}
        />
        <TimeInput
          title='minutes'
          value={minutes}
          update={updateMinutes}
          up={incrementMinutes}
          down={decrementMinutes}
        />
        <TimeInput
          title='seconds'
          value={seconds}
          update={updateSeconds}
          up={incrementSeconds}
          down={decrementSeconds}
        />
      </div>
      <div
        className='buttons-form'
      >
        <Button onClick={handleEdit}>Cancelar</Button>
        <Button submit onClick={handleSubmit}>Establecer</Button>
      </div>
    </form>
  )
}
export default TimeForm
