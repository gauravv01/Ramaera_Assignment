import React from 'react';
import Image from '../../Reusable/Image';
import './BoxImage.css';

function BoxImage({src,styles,parentstyle}) {
  return (
    <div className='box-div' style={parentstyle} >
 <Image src={src} styles={styles} alt='Polygon'className='group-box'/>
    </div>
  )
}

export default BoxImage
