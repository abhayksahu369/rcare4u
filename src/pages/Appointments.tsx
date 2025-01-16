import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, FileText, X, CheckCircle } from 'lucide-react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Load appointments from localStorage
    const savedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    console.log(savedAppointments);
    setAppointments(savedAppointments);
  }, []);

  
  const getStatusColor = (status: string) => {
    return status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const cancel=(id:string)=>{
    const newAppointments=appointments.filter(appointment=>appointment.id!=id);
    localStorage.setItem('appointments', JSON.stringify(newAppointments));
    setAppointments(newAppointments);

  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
      
      </div>
      
      {appointments.length > 0 ? (
        <div className="grid gap-6">
          {appointments.map((appointment: any) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{appointment.doctorName}</h3>
                  <p className="text-gray-600">{appointment.specialization}</p>
                  <p className="text-gray-600">{appointment.hospital}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium w-24 ${getStatusColor(appointment.status)}`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(appointment.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex flex-row-reverse text-white">
                  <button className="`px-3 py-1 rounded-md text-sm font-medium bg-red-400 w-24" onClick={()=>{cancel(appointment.id)}}>
                    cancel
                  </button>
                </div>
              </div>
              
              {appointment.symptoms && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-gray-600 text-sm">{appointment.symptoms}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center text-gray-600">
            <p className="mb-4">You have no upcoming appointments</p>
          </div>
        </div>
      )}

     
    </div>
  );
}