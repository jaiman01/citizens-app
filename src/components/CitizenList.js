import React, { useState } from 'react';
import CitizenDetail from './CitizenDetail';
import { useCitizens } from '../hooks/useCitizens';

function CitizenList() {
  const [selectedCitizen, setSelectedCitizen] = useState(null);
  const { citizens, filterCitizens } = useCitizens();

  return (
    <div className="citizen-list">
      {citizens.map((citizen) => (
        <div key={citizen.id} className="citizen-card">
          <p>{citizen.name}</p>
          <button onClick={() => setSelectedCitizen(citizen)}>View Detail</button>
        </div>
      ))}
      {selectedCitizen && <CitizenDetail citizen={selectedCitizen} onClose={() => setSelectedCitizen(null)} />}
    </div>
  );
}

export default CitizenList;
