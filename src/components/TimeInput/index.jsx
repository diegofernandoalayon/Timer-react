// components
import Up from '../Icons/Up'
import Down from '../Icons/Down'
// styles
import './timeInput.css'

const TimeInput = ({ title, value, update, up, down }) => {
  const handleChange = (event) => {
    const { value } = event.target
    if (+value > 59) return update(59)
    return update(+value)
  }
  return (
    <>
      <div className='input-container'>
        <span>{title}</span>
        <div>
          <input
            type='text'
            onChange={handleChange}
            value={value}
          />
          <div>
            <Up onClick={up}/>
            <Down onClick={down}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default TimeInput
