const MovieCard = ({ title, releaseDate, image }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/" //secure base url
  const imageSize = "w342"

  return (
    <article className="relative w-full">
      <img
        className=""
        src={imageBaseUrl + imageSize + image}
        alt={title} />
      <div className="absolute top-0 bottom-0 left-0 right-0 text-white bg-black/75 px-5 py-10 flex flex-col justify-end gap-5">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg">Released {releaseDate}</p>
      </div>
    </article>
  )
}

export default MovieCard