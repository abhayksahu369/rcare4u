import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, Clock, Building2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const departments = [
  { name: 'Orthopedics', icon: '🦴' },
  { name: 'Dermatology, Venereology and Leprosy', icon: '👨‍⚕️' },
  { name: 'General Medicine', icon: '💊' },
  { name: 'Pediatrics', icon: '👶' },
  { name: 'Psychiatry', icon: '🧠' },
  { name: 'Cardiology', icon: '❤️' },
  { name: 'Neurology', icon: '🧬' },
  { name: 'ENT', icon: '👂' }
];

const hospitals = [
    {
      id: 1,
      name: "Amrit Asmi Institute of Living Life",
      address: "Subham Red Stone, 3rd Floor, Near Pantaloons (Down Town Hospital), G.S. Road",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      specialties: ["Cardiology", "Neurology", "Orthopedics"],
      openHours: "24/7",
      phone: "+91-1234567890",
      description: "Amrit Asmi Institute of Living Life offers a holistic approach to healthcare with a focus on improving mental and physical well-being through expert consultations and advanced diagnostics."
    },
    {
      id: 2,
      name: "Apollo Clinic",
      address: "Kanchan Rd, opp. Bora Service, South Sarania, Ulubari, Guwahati, Assam",
      image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      specialties: ["Oncology", "Gastroenterology", "Pediatrics"],
      openHours: "24/7",
      phone: "+91-9876543210",
      description: "Apollo Clinic is known for its state-of-the-art facilities and expert specialists. It provides comprehensive healthcare services, including pediatrics and oncology treatments, with a patient-first approach."
    },
    {
      id: 3,
      name: "Ayur Health Care",
      address: "KRC Road Narayan Nagar, Santipur Guwahati, Assam",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      specialties: ["Cardiac Surgery", "Neurosurgery", "Transplants"],
      openHours: "24/7",
      phone: "+91-8765432109",
      description: "Ayur Health Care combines traditional and modern medicine to offer a range of healthcare services, including advanced cardiac and neurosurgery options, with a focus on personalized care."
    },
    {
      id: 4,
      name: "City Heart",
      address: "Rajgarh Link Rd, Anil Nagar, Nabin Nagar, Guwahati, Assam",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      specialties: ["Cardiology", "Cardiac Care"],
      openHours: "24/7",
      phone: "+91-8765432110",
      description: "City Heart specializes in cardiology and offers top-notch cardiac care facilities. It is well-equipped with modern technology and expert cardiologists dedicated to ensuring patient health and recovery."
    }
  ];
  

export default function HospitalDesc() {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const {id}=useParams();
  console.log(id);
  const hospital=hospitals.find(hospital=>hospital.id == id);
  const nextDepartments = () => {
    if (startIndex + 5 < departments.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const prevDepartments = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-cyan-600 to-teal-600">
        <img 
          src={`${hospital?.image}`}
          alt="Apollo Clinic"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{hospital?.name}</h1>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 -mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="text-teal-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">{hospital?.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-teal-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-600">Mon - Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="text-teal-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Rating</h3>
                <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{hospital?.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Description</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {hospital?.description}
          </p>
        </div>

        {/* Departments */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choose by Departments</h2>
          <div className="relative">
            <button 
              onClick={prevDepartments}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
              disabled={startIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-4 overflow-hidden px-12">
              {departments.slice(startIndex, startIndex + 5).map((dept, index) => (
                <Link
                            to={`/hospital/${id}/${dept.name}`}
                            key={dept.name}
                            className={`flex-1 bg-teal-100 rounded-lg p-6 cursor-pointer transition-all hover:bg-teal-200
                                ${activeDepartment === index ? 'bg-teal-200 ring-2 ring-teal-500' : ''}`}
                              onClick={() => setActiveDepartment(index)}
                          >
        
                  <div className="text-center">
                    <span className="text-4xl mb-3 block">{dept.icon}</span>
                    <h3 className="font-semibold text-gray-800">{dept.name}</h3>
                  </div>

                </Link>
              ))}
            </div>

            <button 
              onClick={nextDepartments}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
              disabled={startIndex + 5 >= departments.length}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

