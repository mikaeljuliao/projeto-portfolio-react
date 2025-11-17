import React, { useState } from "react";

export default function Carrosel({ images }) {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[230px] md:h-[260px] overflow-hidden">
      <img
  src={images[index]}
  alt={`Slide ${index}`}
  className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-125"
/>


      {/* Botões */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-sky-800 bg-opacity-60 hover:bg-opacity-80
         text-white px-2 py-1 rounded-full"
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-800 bg-opacity-60 
        hover:bg-opacity-80 text-white px-2 py-1 rounded-full"
      >
        →
      </button>
    </div>
  );
}
