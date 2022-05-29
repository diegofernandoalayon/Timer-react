// components
import Up from '../Icons/Up'
import Down from '../Icons/Down'
export default function InputTimerForm ({ title, value, handleChange } = {}) {
  return (
    <>

      <div>
        <span>{title}</span>
        <div>
          <input type='text' onChange={handleChange} value={value} />
          <div>
            <Up />
            <Down />
          </div>
        </div>
      </div>
    </>
  )
}
