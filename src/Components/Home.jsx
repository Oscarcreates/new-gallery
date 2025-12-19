import React, { useState, useEffect, useRef } from 'react';
import { homeImages } from './data';

function Home() {
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentBatch, setCurrentBatch] = useState(0);
  const loaderRef = useRef(null);
  
  const BATCH_SIZE = 20;
  const allImages = homeImages;

  // Load initial batch on mount
  useEffect(() => {
    // Small delay to let masonry layout initialize
    const timer = setTimeout(() => {
      loadNextBatch();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Setup Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleImages.length < allImages.length) {
          loadNextBatch();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, visibleImages.length]);

  const loadNextBatch = () => {
    setLoading(true);
    
    const start = currentBatch * BATCH_SIZE;
    const end = start + BATCH_SIZE;
    const nextBatch = allImages.slice(start, end);
    
    // Load first batch instantly, add delay for subsequent batches
    if (currentBatch === 0) {
      setVisibleImages(prev => [...prev, ...nextBatch]);
      setCurrentBatch(prev => prev + 1);
      setLoading(false);
    } else {
      setTimeout(() => {
        setVisibleImages(prev => [...prev, ...nextBatch]);
        setCurrentBatch(prev => prev + 1);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
        {visibleImages.map((image) => (
          <div 
            key={image.id} 
            className="break-inside-avoid overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Loader */}
      {visibleImages.length < allImages.length && (
        <div ref={loaderRef} className="flex justify-center items-center py-12">
          {loading && (
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;