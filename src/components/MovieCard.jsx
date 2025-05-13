const MovieCard = ({ title, releaseDate, image }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/" //secure base url
  const imageSize = "w342"

  return (
    <article>
      <img src={imageBaseUrl + imageSize + image} alt={title} />
      <h2>{title}</h2>
      <p>{releaseDate}</p>
    </article>
  )
}

export default MovieCard