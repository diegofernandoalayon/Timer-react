import { Children } from 'react'
import { useLocation } from 'react-router'
const MyHelmet = ({ children }) => {
  const { pathname } = useLocation()

  const result = Children.toArray(children)
  const title = result.find(e => e.type === 'title')
  if (title) {
    // console.log(title.props.children)
    document.title = title.props?.children ?? pathname.slice(1)
  }
  return (
    <>
    </>
  )
}
export default MyHelmet

// TODO: read children title and create title depending the title especificated,
