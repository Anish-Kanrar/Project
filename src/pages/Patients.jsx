import { useState } from 'react';
import { patients } from '../services/patientData';
import { PatientCard } from '../components/PatientCard';
import { PatientModal } from '../components/PatientModal';

export const Patients = () => {
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filtered = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <PatientCard key={p.id} patient={p} onView={setSelectedPatient} />
        ))}
      </div>

      {selectedPatient && (
        <PatientModal patient={selectedPatient} onClose={() => setSelectedPatient(null)} />
      )}
    </div>
  );
};
