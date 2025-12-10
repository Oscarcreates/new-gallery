import { homeImages } from './data';

function Home() {
  return (
    <div className="p-4 md:p-8">
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {homeImages.map((image) => (
          <div 
            key={image.id} 
            className="break-inside-avoid overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;