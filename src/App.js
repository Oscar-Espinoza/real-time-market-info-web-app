import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CurrencyDetails from './components/CurrencyDetails/CurrencyDetails';
import CurrencyHistory from './components/currencyHistory/CurrencyHistory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:currencyName" element={<CurrencyDetails />} />
        <Route path="/:currencyName/history" element={<CurrencyHistory />} />
      </Routes>
    </div>
  );
}

export default App;
