import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

const Movies = ({ movieList }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieList}?api_key=${apiKey}&language=en-US&page=1`

  //fetch api data
  const fetchMovies = async () => {
    try {
      setErrorMessage("")
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error fetching movies. Response status: ${response.status}`)
      }
      const data = await response.json()
      setMovies(data.results)
    } catch (error) {
      console.error(error.message)
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchMovies() }, [])

  return (
    <section>
      <div className="flex flex-wrap bg-black">
        {/* {loading && <Loader />} */}
        {/* {errorMessage && <Error text={errorMessage} />} */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )
        )}
      </div>
    </section>
  )
}

export default Movies