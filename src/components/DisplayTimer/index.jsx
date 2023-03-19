import './displaytimer.css'
export default function DisplayTimer ({ hours = 0, minutes, seconds } = {}) {
  const addZero = (value) => {
    return value < 10 ? '0' + value : value
  }
  return (
    <>
      <h2
        className='container-display'
      >
        {
          hours !== 0 && <span className='text-display'>hours</span>
        }
        <span>{hours !== 0 && `${addZero(hours)}`}</span>

        <span className={`text-display ${minutes === 0 && hours === 0 && 'text-opacity'} `}>minutes</span>
        {
          hours !== 0 && <span className='separators-display' >:</span>
        }

        <span className={`${minutes === 0 && hours === 0 && 'text-opacity'}`}>{addZero(minutes)}</span>
        <span className='text-display'>seconds</span>
        <span className= {`separators-display ${minutes === 0 && hours === 0 && 'text-opacity'} `}>:</span>
        <span>{addZero(seconds)}</span>

      </h2>
    </>
  )
}
