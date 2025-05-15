import { Link } from "react-router"
import NavDesktop from "./NavDesktop"

const Menu = () => {
  return (
    <header className="sticky top-0 w-full left-0 z-2">
      <nav className="p-5 bg-black text-white flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          <Link to="/">Movies</Link>
        </h1>
        <NavDesktop />
      </nav>
    </header>
  )
}

export default Menu