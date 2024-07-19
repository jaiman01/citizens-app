import React from 'react';

function CitizenDetail({ citizen, onClose }) {
  return (
    <div className="citizen-detail">
      <h2>{citizen.name}</h2>
      <p>Country: {citizen.country}</p>
      <p>State: {citizen.state}</p>
      <p>Gender: {citizen.gender}</p>
      {/* Add more details as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CitizenDetail;
