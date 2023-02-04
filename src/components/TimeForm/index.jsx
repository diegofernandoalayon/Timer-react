// components
import Button from '../Button'
import TimeInput from '../TimeInput'
// hooks
import useForm from '../../hooks/useForm'
// styles
import './timeForm.css'
const TimeForm = ({ initialMinutes, initialSeconds, title }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleCancel = () => {

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
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit}>Establecer</Button>
      </div>
    </form>
  )
}
export default TimeForm
