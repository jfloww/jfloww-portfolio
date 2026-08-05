'use client';
import { useState } from 'react';
import Image from 'next/image';

export interface imageType {
  src: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  images: imageType[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  if (images.length === 0) {
    return (
      <div className="relative w-full bg-gray-900 rounded-lg">
        <div className="relative w-full h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-lg flex items-center justify-center text-white/70">
          No images
        </div>
      </div>
    );
  }

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
    <div className="relative w-full bg-gray-900 rounded-lg">
      <div className="relative w-full h-64 sm:h-80 md:h-[380px] overflow-hidden rounded-lg">
        <button
          type="button"
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 rounded-full px-2.5 py-1.5 z-10 hover:bg-opacity-70 transition-all"
        >
          &lt;
        </button>

        <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0 relative">
              <Image
                src={image.src}
                fill
                alt={image.title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={index === 0}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black bg-opacity-70 p-4 rounded-lg max-w-[90%]">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-white bg-black bg-opacity-50 rounded-full px-2.5 py-1.5 z-10 hover:bg-opacity-70 transition-all"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center space-x-2 bg-black py-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
            onClick={() => {
              if (!animating) {
                setAnimating(true);
                setCurrent(index);
                setTimeout(() => setAnimating(false), 1000);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
