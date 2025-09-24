export const PatientCard = ({ patient, onView }) => (
  <div className="border rounded p-4 shadow-md hover:shadow-lg transition cursor-pointer">
    <h3 className="font-bold">{patient.name}</h3>
    <p>Age: {patient.age}</p>
    <p>Contact: {patient.contact}</p>
    <button
      className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
      onClick={() => onView(patient)}
    >
      View Details
    </button>
  </div>
);
