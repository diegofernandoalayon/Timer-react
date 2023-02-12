export default function DisplayTimer ({ minutes, seconds }) {
  const addZero = (value) => {
    return value < 10 ? '0' + value : value
  }
  return (
    <>
      <h2 style={{ color: 'var(--color-primary)' }}>{addZero(minutes)}:{addZero(seconds)}</h2>
    </>
  )
}
