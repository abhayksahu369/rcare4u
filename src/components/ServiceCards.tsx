import { Pill, User, Building2, Building, Stethoscope, Home } from 'lucide-react';

const services = [
  { icon: Pill, name: 'Pharmacy', path: '/pharmacies' },
  { icon: User, name: 'Doctor', path: '/doctors' },
  { icon: Building2, name: 'Diagnostic Lab', path: '/labs' },
  { icon: Building, name: 'Hospitals', path: '/hospitals' },
  { icon: Stethoscope, name: 'Nursing Care', path: '/nursing' },
  { icon: Home, name: 'Accommodations', path: '/accommodations' },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {services.map((service) => (
        <a
          key={service.path}
          href={service.path}
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="bg-teal-50 p-4 rounded-full mb-4">
            <service.icon className="h-8 w-8 text-teal-600" />
          </div>
          <span className="text-gray-700 font-medium text-center">
            {service.name}
          </span>
        </a>
      ))}
    </div>
  );
}