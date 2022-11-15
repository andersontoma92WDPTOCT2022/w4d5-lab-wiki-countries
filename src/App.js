import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import listaPaises from './countries.json';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  //

  //
  return (
    <div className="App">
      <Navbar />
      <section className="principal">
        <CountriesList countries={countries} setCountries={setCountries} />
        <Routes>
          <Route path="/:detailID" element={<CountryDetails />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
