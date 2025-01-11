import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6" />
              <span className="text-xl font-bold">Rcare4u</span>
            </div>
            <p className="text-teal-100">
              Your trusted healthcare companion, making healthcare accessible to everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-teal-100 hover:text-white">About Us</a></li>
              <li><a href="/privacy" className="text-teal-100 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-teal-100 hover:text-white">Terms and Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-teal-100">Phone: +917641908850</li>
              <li className="text-teal-100">WhatsApp: +917641908850</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-teal-600 mt-8 pt-8 text-center text-teal-100">
          <p>Copyright Haaku ©2022, All Rights Reserved.</p>
          <p>Powered by Haaku</p>
        </div>
      </div>
    </footer>
  );
}