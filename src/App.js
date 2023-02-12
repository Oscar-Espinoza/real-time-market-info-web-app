import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CurrencyDetails from './components/CurrencyDetails/CurrencyDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:currencyName" element={<CurrencyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
