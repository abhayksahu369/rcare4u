import { MapPin, Star, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const hospitals = [
  {
    id: 1,
    name: "Apollo Hospitals",
    address: "Plot No 1, Eastern Metropolitan Bypass",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    openHours: "24/7",
    phone: "+91-1234567890"
  },
  {
    id: 2,
    name: "Max Super Speciality Hospital",
    address: "Press Enclave Road, Saket",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    specialties: ["Oncology", "Gastroenterology", "Pediatrics"],
    openHours: "24/7",
    phone: "+91-9876543210"
  },
  {
    id: 3,
    name: "Fortis Memorial Hospital",
    address: "Sector 44, Gurugram",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    specialties: ["Cardiac Surgery", "Neurosurgery", "Transplants"],
    openHours: "24/7",
    phone: "+91-8765432109"
  }
];

export default function HospitalListing() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Top Hospitals Near You
        </h2>
        <Link to="/hospitals" className="text-teal-600 hover:text-teal-700 font-medium">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((hospital) => (
          <Link
            to={`/hospital/${hospital.id}`}
            key={hospital.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{hospital.rating}</span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2">{hospital.name}</h3>
              
              <div className="flex items-start space-x-2 text-gray-600 mb-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{hospital.address}</p>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{hospital.openHours}</p>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{hospital.phone}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}