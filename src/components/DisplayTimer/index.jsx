export default function DisplayTimer ({ minutes, seconds }) {
  console.log(typeof minutes)
  const addZero = (value) => {
    return value < 10 ? '0' + value : value
  }
  return (
    <>
      <h2>{addZero(minutes)}:{addZero(seconds)}</h2>
    </>
  )
}
