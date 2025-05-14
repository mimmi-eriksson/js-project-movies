
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Details = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data)) 
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [])


  return (
    <div>
      <MovieInfo 
        title={movieDetails.title}
        score={movieDetails.vote_average}
        desc={movieDetails.overview}/>
        
      

      <Link to={"/"}>Back to Movies</Link>
    </div>
  )
}

export default Details
