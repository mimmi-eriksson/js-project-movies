

const Poster = ({ src, alt }) => {
  return (
    <div className="p-1">
      <img 
        src={src} 
        alt={alt} />
    </div>
  )
}

export default Poster