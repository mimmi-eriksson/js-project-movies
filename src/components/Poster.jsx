

const Poster = ({ src, alt }) => {
  return (
    <div className="bg-white w-max p-1">
      <img
        src={src} 
        alt={alt} />
    </div>
  )
}

export default Poster