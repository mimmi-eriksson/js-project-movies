import MenuItem from "./MenuItem"

const NavDesktop = () => {
  return (
    <ul className="hidden md:flex gap-8 items-center text-lg">
      <MenuItem text="Popular" path="/popular" />
      <MenuItem text="Top Rated" path="/top_rated" />
      <MenuItem text="Now Playing" path="/now_playing" />
      <MenuItem text="Upcoming" path="/upcoming" />
    </ul>
  )
}

export default NavDesktop