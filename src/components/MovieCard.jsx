import { Link } from "react-router"

const MovieCard = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/" //secure base url
  const imageSize = "w342"

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="relative"
    >
      <img
        className="w-full"
        src={imageBaseUrl + imageSize + movie.poster_path}
        alt={movie.title} />
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white bg-black/75 px-5 py-10 flex flex-col justify-end gap-5">
        <h2 className="text-4xl font-bold">{movie.title}</h2>
        <p className="text-lg">Released {movie.releaseDate}</p>
      </div>
    </Link>
  )
}

export default MovieCard