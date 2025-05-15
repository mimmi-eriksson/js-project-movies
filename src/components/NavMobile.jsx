import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react"
import MenuItem from "./MenuItem"

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false)

  // close menu when an item is clicked
  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="md:hidden">
      <Hamburger toggled={isOpen} size={32} toggle={setOpen} label="Show menu" rounded />
      {isOpen && (
        <ul className="fixed top-20 left-0 right-0 bottom-0 z-2 flex flex-col items-end gap-8 text-lg bg-black p-8" onClick={handleClick}>
          <MenuItem text="Popular" path="/popular" />
          <MenuItem text="Top Rated" path="/top_rated" />
          <MenuItem text="Now Playing" path="/now_playing" />
          <MenuItem text="Upcoming" path="/upcoming" />
        </ul>
      )}
    </div>
  )
}

export default NavMobile