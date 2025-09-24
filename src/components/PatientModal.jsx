export const PatientModal = ({ patient, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <button className="mt-4 bg-red-500 text-white px-4 py-1 rounded" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);
