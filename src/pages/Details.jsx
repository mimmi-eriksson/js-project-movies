
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import MovieInfo from "../components/MovieInfo"
import Poster from "../components/Poster"
import BackButton from "../components/BackButton"
import { Loader } from "../components/Loader"


const Details = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const imageBaseUrl = "https://image.tmdb.org/t/p/" //secure base url
  const backgroundImgSize = "w1280"
  

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    const fetchMovieDetail = async () => {

      try {
        setErrorMessage("")
        setLoading(true)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        if (!response.ok) {
          throw new Error(`Error fetching movie details. Response status: ${response.status}`)
        }
        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        console.error(error.message)
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetail()
  }, [])





  return (
    <section className='relative'>
      
      <Link
        to={"/"}
        className='absolute left-[50px] top-[10px] z-20' >
        <BackButton />
      </Link>

      {loading && <Loader />}

      <div
        className="min-h-screen flex flex-col justify-end bg-cover bg-center relative"
        style={{
          backgroundImage: movieDetails.backdrop_path
            ? `linear-gradient(
           to top,
           rgba(0,0,0,0.9)   0%,
           rgba(0,0,0,0)    50%
         ),
         url(${imageBaseUrl}${backgroundImgSize}${movieDetails.backdrop_path})`
            : undefined
        }}>

        <div className='flex flex-col padding p-[50px] z-20 gap-2 min-[577px]:flex-row'>
          <Poster src={`${imageBaseUrl}w154${movieDetails.poster_path}`}
            srcSet={`
              ${imageBaseUrl}w185${movieDetails.poster_path} 185w,
              ${imageBaseUrl}w342${movieDetails.poster_path} 342w,
              ${imageBaseUrl}w500${movieDetails.poster_path} 500w
            `}
            sizes="
              (min-width: 770px) 500px,
              (min-width: 577px) 342px,
              185px
            "
            alt={movieDetails.title} />
          <MovieInfo
            title={movieDetails.title}
            score={(Math.round(movieDetails.vote_average * 10) / 10).toFixed(1)}
            desc={movieDetails.overview} />
        </div>
      </div>
    </section>
  )
}

export default Details
