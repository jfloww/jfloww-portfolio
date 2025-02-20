"use client";
import { useState } from "react";
import Image from "next/image";
export interface imageType {
  src: string;
  title: string;
  description: string;
}

export default function ImageSlider(params: imageType[]) {
  const images = Object.values(params);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextImage = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prev) => (prev + 1) % images.length);
    setTimeout(() => setAnimating(false), 1000);
  };

  const prevImage = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 1000);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-900">
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
      >
        &lt;
      </button>

      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center rounded-lg">
              <Image
                src={image.src}
                width={800}
                height={500}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
      >
        &gt;
      </button>

      <ul className="flex space-x-2 justify-center mt-4">
        {images.map((_, index) => (
          <li
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
