import { NavLink } from "react-router"

const NavDesktop = () => {
  return (
    <ul className="hidden md:flex gap-8 items-center text-lg">
      <li>
        <NavLink to="/popular">Popular</NavLink>
      </li>
      <li>
        <NavLink to="/top_rated">Top Rated</NavLink>
      </li>
      <li>
        <NavLink to="/now_playing">Now Playing</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming">Upcoming</NavLink>
      </li>
    </ul>
  )
}

export default NavDesktop