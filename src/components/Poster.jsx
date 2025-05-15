

const Poster = ({ src, srcSet, sizes, alt, className }) => {
  return (
    <div className="bg-white w-max h-max p-1 min-[577px]:self-end">
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className || 'block'} />
    </div>
  )
}

export default Poster