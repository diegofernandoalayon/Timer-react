import './button.css'
export default function Button ({ children, onClick, isPaused, submit }) {
  let className = 'btn'
  if (isPaused) {
    className += ' btn-pause'
  }
  const typeButton = submit ? 'submit' : 'button'
  return (
    <>
      <button type={typeButton} className={className} onClick={onClick}>{children}</button>
    </>
  )
}
