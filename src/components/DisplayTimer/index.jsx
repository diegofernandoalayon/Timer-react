export default function DisplayTimer ({ hours = 0, minutes, seconds } = {}) {
  const addZero = (value) => {
    return value < 10 ? '0' + value : value
  }
  return (
    <>
      <h2
        style={{ color: 'var(--color-primary)' }}
      >
        {hours !== 0 ? `${addZero(hours)}:` : null}{addZero(minutes)}:{addZero(seconds)}
      </h2>
    </>
  )
}
