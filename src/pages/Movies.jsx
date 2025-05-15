import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import MovieCard from "../components/MovieCard"
import Menu from "../components/Menu"
import { Loader } from "../components/Loader"
import NotFound from "./NotFound"

const Movies = () => {
  const { movieList } = useParams()
  const [url, setUrl] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  // change url when movieList changes
  useEffect(() => {
    const newUrl = (movieList)
      ? `https://api.themoviedb.org/3/movie/${movieList}?api_key=${apiKey}&language=en-US&page=1`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

    setUrl(newUrl)
  }, [movieList, apiKey]) // will rerun when movieList (or apiKey) changes

  // fetch api data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        setNotFound(false)
        const response = await fetch(url)
        if (!response.ok) {
          if (response.status === 404) {
            setNotFound(true)
          }
          throw new Error(`Error fetching movie details. Response status: ${response.status}`)
        }
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [url]) // will run when url changes

  return (
    <section>
      <Menu />
      <div className="flex flex-wrap">
        {loading && <Loader />}
        {notFound && <NotFound />}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )
        )}
      </div>
    </section>
  )
}

export default Movies