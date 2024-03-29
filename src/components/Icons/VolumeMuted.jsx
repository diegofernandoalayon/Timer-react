const VolumeMuted = (props) => (
  <svg
    height={21}
    viewBox="0 0 21 21"
    width={21}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.stroke || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(2 2)"
    >
      <path d="m1.5 5.5h3l5-5v16l-5-5h-3c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1z" />
      <path d="m11.5 6.5 4 4" />
      <path d="m15.5 10.5-4-4z" transform="matrix(0 1 -1 0 22 -5)" />
    </g>
  </svg>
)
export default VolumeMuted
