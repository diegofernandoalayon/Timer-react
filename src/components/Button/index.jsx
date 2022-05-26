import './button.css'
export default function Button ({ children, onClick, isPaused }) {
  let className = 'btn'
  console.log(isPaused)
  if (isPaused) {
    className += ' btn-pause'
  }
  return (
    <>
      <button className={className} onClick={onClick}>{children}</button>
    </>
  )
}
