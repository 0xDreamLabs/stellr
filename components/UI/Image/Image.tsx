import React from 'react';
import Image from 'next/image';

import { ImageProps } from './ImageProps';

export const ImageComponent = ({
  src,
  alt,
  className,
  onClick,
  circle,
  size,
  ariaLabel,
  omitMarginAuto,
  marginBottom,
  setIsImgLoading,
}: ImageProps) => {
  let defaultStyles = '';

  defaultStyles = circle ? 'rounded-full border-primary-500 border-2 p-1 ' : '';
  if (size) {
    defaultStyles += size;
  } else {
    defaultStyles += 'h-32 w-32';
  }

  if (!omitMarginAuto) {
    defaultStyles += ' m-auto';
  }

  const handleImgLoaded = () => {
    if (setIsImgLoading) {
      setIsImgLoading(false);
    }
  };

  /*
    if we have onClick, wrap image in button and provide aria-label (accessibility),
    else return just the image */
  return onClick ? (
    <button type="button" onClick={onClick} aria-label={ariaLabel || ''}>
      <Image src={src} className={`inline-block ${defaultStyles} mb-3 ${className}`} alt={alt} />
    </button>
  ) : (
    <Image src={src} className={`inline-block ${defaultStyles} ${marginBottom || 'mb-3'} ${className}`} alt={alt} onLoad={() => handleImgLoaded()} />
  );
};

export default ImageComponent;
