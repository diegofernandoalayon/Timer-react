const CloseMenu = (props) => (
  <svg height={21} width={21} viewBox='0 0 21 21' xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.stroke || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.5 15.5-10-10zM15.5 5.5l-10 10"/>
    </g>
  </svg>
)

export default CloseMenu