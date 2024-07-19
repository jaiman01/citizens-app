import { useState, useEffect } from 'react';
import data from '../data/CITIZEN_MOCK.json';

export const useCitizens = () => {
  const [citizens, setCitizens] = useState([]);

  useEffect(() => {
    setCitizens(data);
  }, []);

  const filterCitizens = (country, state) => {
    let filtered = data;
    if (country) {
      filtered = filtered.filter(citizen => citizen.country === country);
    }
    if (state) {
      filtered = filtered.filter(citizen => citizen.state === state);
    }
    setCitizens(filtered);
  };

  return { citizens, filterCitizens };
};
