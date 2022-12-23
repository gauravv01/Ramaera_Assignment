import React from 'react';

function CustomButton({className,children,style}) {
  return <button className={className} style={style}>{children}</button>
}

export default CustomButton
