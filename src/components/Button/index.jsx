import './button.css'
export default function Button ({ children }) {
  return (
    <>
      <button className='btn'>{children}</button>
    </>
  )
}
