import React from 'react';

function Image({src,alt,styles,className}) {
  return <img style={styles} className={className} src={src} alt={alt} />
}

export default Image
