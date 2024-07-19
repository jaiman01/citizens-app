import React, { useState } from 'react';
import { useCitizens } from '../hooks/useCitizens';

function Filter() {
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  const { filterCitizens } = useCitizens();

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState('');
    filterCitizens(e.target.value, '');
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    filterCitizens(country, e.target.value);
  };

  return (
    <div className="filter">
      <select value={country} onChange={handleCountryChange}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        {/* Add more countries as needed */}
      </select>

      <select value={state} onChange={handleStateChange}>
        <option value="">None</option>
        {country === 'India' && <option value="Delhi">Delhi</option>}
        {country === 'India' && <option value="Maharashtra">Maharashtra</option>}
        {country === 'USA' && <option value="California">California</option>}
        {country === 'USA' && <option value="Texas">Texas</option>}
        {/* Add more states as needed */}
      </select>
    </div>
  );
}

export default Filter;
