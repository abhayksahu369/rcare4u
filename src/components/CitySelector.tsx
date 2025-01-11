import { ChevronLeft, ChevronRight } from 'lucide-react';

const cities = [
  {
    name: 'Ahmedabad',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Sabarmati_riverside.jpg'
  },
  {
    name: 'Guwahati',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Kamakhya_Temple%2C_Guwahati.jpg'
  },
  {
    name: 'Jowai',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Panoramic_Thadlaskein.jpg'
  }
];

export default function CitySelector() {
  return (
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
        {cities.map((city) => (
          <div key={city.name} className="flex-none">
            <div className="relative w-64 h-32 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{city.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}