import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-teal-600">Rcare4u</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/appointments" className="text-gray-700 hover:text-teal-600">
              My Orders & Appointments
            </Link>
            <a href="tel:+917641908850" className="text-teal-600 hover:text-teal-700 flex items-center space-x-1">
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </a>
            <a href="https://wa.me/917641908850" className="text-teal-600 hover:text-teal-700 flex items-center space-x-1">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
              Sign Out
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/appointments" className="block py-2 text-gray-700">
              My Orders & Appointments
            </Link>
            <a href="tel:+917641908850" className="block py-2 text-teal-600">
              Call Us
            </a>
            <a href="https://wa.me/917641908850" className="block py-2 text-teal-600">
              WhatsApp Us
            </a>
            <button className="w-full mt-2 bg-teal-600 text-white px-4 py-2 rounded-md">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}