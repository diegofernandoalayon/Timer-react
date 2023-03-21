import './displaycountdown.css'
import { addZero } from '../../utils'
const DisplayCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <h2 className='container-display-countdown'>
        <span className='digit-countdown'>
          <span>{addZero(days)}</span>
          <span className='text-display-countdown'>
            days
          </span>
        </span>
        <span className='separators-display-countdown'>:</span>
        <span className='digit-countdown'>
          <span>{addZero(hours)}</span>
          <span className='text-display-countdown'>
            hours
          </span>
        </span>
        <span className='separators-display-countdown'>:</span>
        <span className='digit-countdown'>
          <span>{addZero(minutes)}</span>
          <span className='text-display-countdown'>
            minutes
          </span>
        </span>
        <span className='separators-display-countdown'>:</span>
        <span className='digit-countdown '>
          <span>{addZero(seconds)}</span>
          <span className='text-display-countdown'>
            seconds
            </span>
        </span>
      </h2>

    </>
  )
}

export default DisplayCountdown
