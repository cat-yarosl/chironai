import React from 'react';

interface CardBackProps {
  title: string;
  description: string;
}

const CardBack: React.FC<CardBackProps> = ({ title, description }) => {
  return (
    <div className='
      bg-gray-800 
      shadow-lg 
      rounded-lg 
      p-6 
      max-w-lg 
      w-full
      ml-4
    '>
      <h1 className='
        text-3xl 
        font-bold 
        text-white 
        mb-4'>
          {title}
        </h1>
      <p className='
        text-gray-300 
        mb-4
      '>
        {description}
      </p>
    </div>
  );
};

export default CardBack;