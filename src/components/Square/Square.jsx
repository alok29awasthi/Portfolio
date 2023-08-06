import React from 'react';

const Square = ({ height, width, color, className }) => {
  const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

  return <div className={className} style={{ 
    height: `${height}px`,
    width: `${width}px`,
    background: rgbColor }}></div>;
};

export default Square;