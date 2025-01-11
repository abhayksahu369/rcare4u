import { MapPin } from 'lucide-react';

const pharmacies = [
  {
    name: "Aarti Medical Hall",
    address: "HV7H+72C, Howell Rd, Laban, Shillong, Meghalaya",
    image: "https://images.unsplash.com/photo-1586015555751-63c29b8cd2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Chowdhury Pharmacy",
    address: "Police Bazaar (PB), Opposite MUDA Complex, Shillong",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "M/D.L PHARMACY",
    address: "Iew Pynthor, Pynthorbah",
    image: "https://images.unsplash.com/photo-1583339793403-3d9b001b6008?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "GRACIOUS PHARMACY",
    address: "Umkdait, Nongmynsong",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
  }
];

export default function PharmacyListing() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Pharmacies for doorstep delivery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pharmacies.map((pharmacy) => (
          <div key={pharmacy.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={pharmacy.image}
              alt={pharmacy.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{pharmacy.name}</h3>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="ml-2 text-sm">{pharmacy.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}