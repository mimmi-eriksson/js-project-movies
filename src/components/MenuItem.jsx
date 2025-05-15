import { NavLink } from "react-router"

const MenuItem = ({ text, path }) => {
  return (
    <li>
      <NavLink to={path}>{text}</NavLink>
    </li>
  )
}

export default MenuItem

