import { useParams } from "react-router"
import Movies from "../pages/Movies"

const ShowDetails = () => {
  const params = useParams()
  console.log(params)
  const movieMatch = Movies.find((movie) => movie.id === params.id)
  console.log(movieMatch)

  return (
    <div>ShowDetails</div>

  )
}

export default ShowDetails