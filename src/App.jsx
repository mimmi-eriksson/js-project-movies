import { BrowserRouter, Routes, Route } from "react-router"
import Movies from "./pages/Movies"
import Details from "./pages/Details"

export const App = () => {
  return (
    <>
      <h1>Movies</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/details:movieId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
