import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Clock, Phone, Award, Stethoscope, Calendar, X, CheckCircle } from 'lucide-react';

// Mock data for doctors
// const hospitals = [
//   {
//     id: 1,
//     name: "Apollo Clinic",
//     address: "Kanchan Rd, opp. Bora Service, South Sarania, Ulubari",
//     image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     specialties: ["Cardiology", "Neurology", "Orthopedics"],
//     openHours: "24/7",
//     phone: "+91-1234567890"
//   },
//   {
//     id: 2,
//     name: "Max Super Speciality Hospital",
//     address: "Press Enclave Road, Saket",
//     image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     specialties: ["Oncology", "Gastroenterology", "Pediatrics"],
//     openHours: "24/7",
//     phone: "+91-9876543210"
//   },
//   {
//     id: 3,
//     name: "Fortis Memorial Hospital",
//     address: "Sector 44, Gurugram",
//     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     specialties: ["Cardiac Surgery", "Neurosurgery", "Transplants"],
//     openHours: "24/7",
//     phone: "+91-8765432109"
//   }
// ];

// const doctorsData = {
//   1: [
//     {
//       id: 1,
//       name: "Dr. Sarah Johnson",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
//       specialization: "Cardiologist",
//       experience: 15,
//       qualification: "MBBS, MD, DM (Cardiology)",
//       languages: ["English", "Hindi"],
//       rating: 4.9,
//       consultationFee: 1500,
//       availability: ["Mon", "Wed", "Fri"],
//       isBooked: false
//     },
//     {
//       id: 2,
//       name: "Dr. Robert Wilson",
//       image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
//       specialization: "Neurologist",
//       experience: 12,
//       qualification: "MBBS, MD (Neurology)",
//       languages: ["English", "Hindi", "Bengali"],
//       rating: 4.7,
//       consultationFee: 1200,
//       availability: ["Tue", "Thu", "Sat"],
//       isBooked: false
//     }
//   ],
//   // ... rest of the doctors data remains the same
// };

// ... rest of the hospital data remains the same
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
    description: "Amrit Asmi Institute of Living Life offers a holistic approach to healthcare with a focus on improving mental and physical well-being through expert consultations and advanced diagnostics.",
    departments: [
      {
        name: "Orthopedics",
        doctors: [
          {
            id: 1,
            name: "Dr. Rajesh Sharma",
            image: "https://tse2.mm.bing.net/th?id=OIP.0hQU8JAptZW9RH5A6eCgmgHaFB&pid=Api&P=0&h=180",
            specialization: "Orthopedic Surgeon",
            experience: 12,
            qualification: "MBBS, MS (Orthopedics)",
            languages: ["English", "Hindi"],
            rating: 4.7,
            consultationFee: 1200,
            availability: ["Tue", "Thu", "Sat"],
            isBooked: false
          }
        ]
      },
      {
        name: "Dermatology, Venereology and Leprosy",
        doctors: [
          {
            id: 2,
            name: "Dr. Priya Mehta",
            image: "https://tse3.mm.bing.net/th?id=OIP.ofx88_RUVmLrTWAYHmr5tQHaE8&pid=Api&P=0&h=180",
            specialization: "Dermatologist",
            experience: 8,
            qualification: "MBBS, MD (Dermatology)",
            languages: ["English", "Hindi"],
            rating: 4.6,
            consultationFee: 1000,
            availability: ["Mon", "Wed", "Fri"],
            isBooked: false
          }
        ]
      },
      {
        name: "General Medicine",
        doctors: [
          {
            id: 3,
            name: "Dr. Suresh Gupta",
            image: "https://tse2.mm.bing.net/th?id=OIP.VEMbAGEdHz8Xg0zW2Ja7aAHaG2&pid=Api&P=0&h=180",
            specialization: "General Physician",
            experience: 10,
            qualification: "MBBS, MD (General Medicine)",
            languages: ["English", "Hindi", "Assamese"],
            rating: 4.8,
            consultationFee: 900,
            availability: ["Mon", "Wed", "Fri"],
            isBooked: false
          }
        ]
      },
      {
        name: "Pediatrics",
        doctors: [
          {
            id: 4,
            name: "Dr. Anjali Verma",
            image: "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-205.jpg",
            specialization: "Pediatrician",
            experience: 9,
            qualification: "MBBS, MD (Pediatrics)",
            languages: ["English", "Hindi"],
            rating: 4.7,
            consultationFee: 1100,
            availability: ["Mon", "Thu", "Sat"],
            isBooked: false
          }
        ]
      },
      {
        name: "Psychiatry",
        doctors: [
          {
            id: 5,
            name: "Dr. Vikram Singh",
            image: "https://tse2.mm.bing.net/th?id=OIP.QlUEurMwqqxzK0aUqHJhlAAAAA&pid=Api&P=0&h=180",
            specialization: "Psychiatrist",
            experience: 11,
            qualification: "MBBS, MD (Psychiatry)",
            languages: ["English", "Hindi"],
            rating: 4.8,
            consultationFee: 1300,
            availability: ["Tue", "Fri"],
            isBooked: false
          }
        ]
      }
    ]
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
    description: "Apollo Clinic is known for its state-of-the-art facilities and expert specialists. It provides comprehensive healthcare services, including pediatrics and oncology treatments, with a patient-first approach.",
    departments: [
      {
        name: "Orthopedics",
        doctors: [
          {
            id: 1,
            name: "Dr. Arvind Malhotra",
            image: "https://tse2.mm.bing.net/th?id=OIP.0hQU8JAptZW9RH5A6eCgmgHaFB&pid=Api&P=0&h=180",
            specialization: "Orthopedic Surgeon",
            experience: 14,
            qualification: "MBBS, MS (Orthopedics)",
            languages: ["English", "Hindi"],
            rating: 4.8,
            consultationFee: 1400,
            availability: ["Mon", "Wed", "Fri"],
            isBooked: false
          }
        ]
      },
      {
        name: "Dermatology, Venereology and Leprosy",
        doctors: [
          {
            id: 2,
            name: "Dr. Kavita Sharma",
            image: "https://tse3.mm.bing.net/th?id=OIP.ofx88_RUVmLrTWAYHmr5tQHaE8&pid=Api&P=0&h=180",
            specialization: "Dermatologist",
            experience: 10,
            qualification: "MBBS, MD (Dermatology)",
            languages: ["English", "Hindi", "Punjabi"],
            rating: 4.9,
            consultationFee: 1200,
            availability: ["Tue", "Thu", "Sat"],
            isBooked: false
          }
        ]
      },
      {
        name: "General Medicine",
        doctors: [
          {
            id: 3,
            name: "Dr. Ramesh Agarwal",
            image: "https://tse2.mm.bing.net/th?id=OIP.VEMbAGEdHz8Xg0zW2Ja7aAHaG2&pid=Api&P=0&h=180",
            specialization: "General Physician",
            experience: 12,
            qualification: "MBBS, MD (General Medicine)",
            languages: ["English", "Hindi", "Marathi"],
            rating: 4.8,
            consultationFee: 1000,
            availability: ["Tue", "Thu", "Sat"],
            isBooked: false
          }
        ]
      },
      {
        name: "Pediatrics",
        doctors: [
          {
            id: 4,
            name: "Dr. Meena Reddy",
            image: "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-205.jpg",
            specialization: "Pediatrician",
            experience: 11,
            qualification: "MBBS, MD (Pediatrics)",
            languages: ["English", "Hindi"],
            rating: 4.9,
            consultationFee: 1300,
            availability: ["Mon", "Wed", "Fri"],
            isBooked: false
          }
        ]
      }
    ]
  }
  
  // Repeat similar structure for other hospitals
];

export default function Doctors() {
  const { id,dep } = useParams<{ id: string,dep:string }>();
  const navigate = useNavigate();
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  // const hospital = hospitals[id as keyof typeof hospitals];
  // const doctors = doctorsData[id as keyof typeof doctorsData] || [];

  const hospital=hospitals.find(hospital=>hospital.id == id);
  console.log(dep);
  const {doctors,name}=hospital.departments.find(department=>department.name==dep);
  console.log(doctors);

  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setShowAppointmentModal(true);
  };

  const handleConfirmBooking = (doctor: any) => {
   
    
    // Update the doctor's booking status
    doctor.isBooked = true;

    // Create appointment data
    const appointmentData = {
      id: Math.random().toString(36).substr(2, 9),
      doctorName: selectedDoctor.name,
      specialization: selectedDoctor.specialization,
      hospital: hospital.name,
      date: selectedDate,
      time: selectedTime,
      status: 'confirmed',
      symptoms: ''
    };

    // Store appointment in localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    localStorage.setItem('appointments', JSON.stringify([...existingAppointments, appointmentData]));

    setShowAppointmentModal(false);
    navigate('/appointments');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hospital Header section remains the same */}
      
      {/* Doctors List */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor:any) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialization}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <p className="text-sm">{doctor.experience} years experience</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Stethoscope className="h-4 w-4" />
                    <p className="text-sm">{doctor.qualification}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between gap-1">
                  <p className="text-teal-600 font-medium">₹{doctor.consultationFee}</p>
                  {doctor.isBooked ? (
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-md">
                      Booked
                    </span>
                  ) : (
                    <button
                      onClick={() => handleBookAppointment(doctor)}
                      className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors duration-300"
                    >
                      Book Appointment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Book Appointment</h2>
              <button 
                onClick={() => setShowAppointmentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{selectedDoctor.name}</h3>
                  <p className="text-gray-600">{selectedDoctor.specialization}</p>
                  <p className="text-teal-600">Consultation Fee: ₹{selectedDoctor.consultationFee}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Days
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.availability.map((day: string) => (
                      <span
                        key={day}
                        className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`border rounded-md py-2 px-4 text-sm transition-colors duration-300 ${
                        selectedTime === time
                          ? 'bg-teal-50 border-teal-500 text-teal-700'
                          : 'border-gray-300 hover:bg-teal-50 hover:border-teal-500'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAppointmentModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={()=> handleConfirmBooking(selectedDoctor)}
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}