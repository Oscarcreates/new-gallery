import React from 'react'
import { videos } from './data';

function Videos() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Videos</h2>
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
           
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
          
            {/* <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {video.title}
              </h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;