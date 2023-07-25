
import './App.css'
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
function App() {

  const CurrencyConverter = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

  return (
    <>
      <h1>  WELOCME TO MY CURRENCY CONVERTER</h1>
      <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="input-group">
        <input type="number" />
        <select >
          
        </select>
      </div>
      <div className="input-group">
        <h3>=</h3>
      </div>
      <div className="input-group">
        <input type="text" value readOnly />
        <select>
          
        </select>
      </div>
    </div>
  

    </>
  )
}

export default App
