import { Search, MapPin } from 'lucide-react';

export default function PharmacySearch() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find a Pharmacy</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by pharmacy name or location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>

      <div className="text-center text-gray-600">
        Search for pharmacies to see available medicines and delivery options
      </div>
    </div>
  );
}