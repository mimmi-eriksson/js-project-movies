

const MovieInfo = ({ title, score, desc }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>⭐{score}</p>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default MovieInfo