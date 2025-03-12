import React from 'react';

interface CardFrontProps {
  imageUrl: string;
  imageAlt: string;
}

const CardFront: React.FC<CardFrontProps> = ({ imageUrl, imageAlt }) => {
  return (
    <div className='
      bg-white 
      shadow-lg 
      rounded-full  
      w-64 
      h-64 
      flex 
      overflow-hidden
    '>
      <img src={imageUrl} alt={imageAlt} className='
        w-full 
        h-full 
        object-cover 
        rounded-full
      '/>
    </div>
  );
};

export default CardFront;