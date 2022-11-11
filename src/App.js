import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <CountriesList />
      </div>

      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
