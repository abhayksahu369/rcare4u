import { Search } from 'lucide-react';
import ServiceCards from '../components/ServiceCards';
import CitySelector from '../components/CitySelector';
import PharmacyListing from '../components/PharmacyListing';
import HospitalListing from '../components/HospitalListing';
import DoctorTeamImage from '../assets/rb_2148502181.png';


export default function Home() {
  return (
    <div className="space-y-12">
      
      <section className="bg-gradient-to-r from-teal-500 to-gray-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
            
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Appointment<br />With Trusted Doctors
              </h1>
              <p className="text-lg mb-8 text-blue-100">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-2 flex">
                  <Search className="h-6 w-6 text-gray-400 ml-2" />
                  <input
                    type="text"
                    placeholder="Search for doctors, hospitals, pharmacy, laboratory, home healthcare services"
                    className="flex-1 px-4 py-2 focus:outline-none"
                  />
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300">
                    Search
                  </button>
                </div>
              </div>
              

            </div>
            <div className="hidden md:block">
              <img
                src={DoctorTeamImage}
                alt="Doctors Team"
                className="rounded-lg w-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Selection */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Select your City
        </h2>
        <CitySelector />
      </section>

      {/* Services */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Choose your healthcare services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our comprehensive range of healthcare services tailored to your needs
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 opacity-50 rounded-2xl" />
          <div className="relative">
            <ServiceCards />
          </div>
        </div>
      </div>
    </section>

      {/* Hospital Listing */}
      <HospitalListing />

      {/* Pharmacy Listing */}
      <PharmacyListing />
    </div>
  );
}