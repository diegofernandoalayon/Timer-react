export default function FormTimer ({ handleChangeMin, handleChangeSec }) {
  return (
    <>
      <h1>Set Timer</h1>
      min
      <input type='text' onChange={handleChangeMin} />
      sec
      <input type='text' onChange={handleChangeSec} />
    </>
  )
}