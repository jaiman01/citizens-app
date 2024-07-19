import React from 'react';
import CitizenList from './components/CitizenList';
import Filter from './components/Filter';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Citizen List</h1>
      <Filter />
      <CitizenList />
    </div>
  );
}

export default App;
