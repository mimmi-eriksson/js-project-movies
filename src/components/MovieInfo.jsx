

const MovieInfo = ({ title, score, desc }) => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between p-2 text-xl">
        <h2 className="text-white p-1 font-bold text-shadow-lg">{title}</h2>
        <p className="text-black bg-white p-1 font-semibold">⭐{score}</p>
      </div>
      <p className="text-white p-2">{desc}</p>
    </div>
  )
}

export default MovieInfo