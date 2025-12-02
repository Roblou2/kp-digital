'use client'; // required for client-side interactivity in App Router

import React from 'react';
import { useRouter } from 'next/navigation'; 

const ReadMoreButton = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/'); 
  };

  return (
    <div className="flex flex-row">
      <div className="font-sans box-content mt-4
        shadow-[1px_1px_5px_-1px_#4c4c4c] text-2xl">
        <button
          className={`${props.bg} hover:bg-gray-700 text-white font-bold font-barlow py-2 px-2 rounded`}
          onClick={handleClick}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ReadMoreButton;
