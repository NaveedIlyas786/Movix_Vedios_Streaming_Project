import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Lazyimg = ({ src, className, alt = '' }) => {
  const wrapperClass = className ? `${className}-wrapper` : ''
  const imgClass = className ? `${className}-img` : ''

  return (
    <LazyLoadImage
      className={wrapperClass}
      wrapperClassName={wrapperClass}
      imgClassName={imgClass}
      alt={alt}
      src={src}
      effect='blur'
      threshold={200}
    />
  )
}

export default Lazyimg
