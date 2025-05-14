

const MovieInfo = ({ title, score, desc }) => {
  return (
    <div>
      <div>
        <h2 className="text-white">{title}</h2>
        <p className="text-white">⭐{score}</p>
      </div>
      <p className="text-white">{desc}</p>
    </div>
  )
}

export default MovieInfo