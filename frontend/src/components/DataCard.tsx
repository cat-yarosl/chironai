import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface DataCardProps {
  data: any;
}

const DataCard: React.FC<DataCardProps> = ({ data }) => {
  return (
    <div className='relative flex flex-row group'>
      <div className='
        flex
        w-81
        h-81
        items-center
        justify-center
        text-white
        rounded-full
        bg-gray-800
        shadow-md
      '>
        <CardFront 
          imageUrl={data.image_url} 
          imageAlt={data.title} 
        />
      </div>
      <div className='
        w-200
        mt-10
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-600
        transform 
        rounded-lg
        shadow-md
      '>
        <CardBack 
          title={data.title} 
          description={data.description} 
        />
      </div>
      <svg 
        className='
          absolute 
          left-48 
          top-0 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-600
        ' 
        width="150" 
        height="150" 
        viewBox="0 0 150 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 60 C 60 90, 90 90, 160 50" 
          stroke="white" 
          strokeWidth="2" 
          fill="transparent"
        />
        <polygon 
          points="135,135 140,140 135,145" 
          fill="white"
        />
      </svg>
    </div>
  );
};

export default DataCard;