

const MovieInfo = ({ title, score, desc }) => {
  return (
    <div className="w-full px-3">
      <div className="flex w-full justify-between text-2xl">
        <h1 className="text-white">
          <span className="font-bold text-shadow-lg">{title} </span>
          <span className="text-black h-max bg-white">⭐{score}</span>
        </h1>
      
      </div>
      <p className="text-white">{desc}</p>
    </div>
  )
}

export default MovieInfo