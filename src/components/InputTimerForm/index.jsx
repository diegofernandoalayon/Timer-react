// components
import Up from '../Icons/Up'
import Down from '../Icons/Down'
// styles
import './inputTimerForm.css'
export default function InputTimerForm ({ title, value, update, up, down } = {}) {
  const handleChange = (event) => {
    const { value } = event.target
    if (+value > 59) {
      update(59)
    } else {
      update(+value)
    }
  }
  return (
    <>
      <div className='input-container'>
        <span>{title}</span>
        <div>
          <input type='text' onChange={handleChange} value={value} />
          <div>
            <Up onClick={up} />
            <Down onClick={down} />
          </div>
        </div>
      </div>
    </>
  )
}
