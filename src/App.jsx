import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
 
    useEffect(() => {
      axios
        .get("https://api.exchangerate-api.com/v4/latest/USD")
        .then((response) => {
          const currencyNames = Object.keys(response.data.rates);
          setCurrencies(currencyNames);
          setFromCurrency("USD");
          setToCurrency(currencyNames[0]);
        })
        .catch((error) => {
          console.error("Error fetching currencies:", error);
        });
    }, []);

    useEffect(() => {
      if (fromCurrency === toCurrency) {
        setConvertedAmount(amount);
      } else {
        axios
          .get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
          .then((response) => {
            const exchangeRate = response.data.rates[toCurrency];
            setConvertedAmount((amount * exchangeRate).toFixed(2));
          })
          .catch((error) => {
            console.error("Error converting amount:", error);
          });
      }
    }, [fromCurrency, toCurrency, amount]);

    const handleFromCurrencyChange = (e) => {
      setFromCurrency(e.target.value);
    };
    const handleToCurrencyChange = (e) => {
      setToCurrency(e.target.value);
    };
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };

    return (
      <>
        <h1> WELOCME TO MY CURRENCY CONVERTER</h1>
        <div className="currency-converter">
          <div className="input-group">
            <input type="number" value={amount} onChange={handleAmountChange} />
            <select value={fromCurrency} onChange={handleFromCurrencyChange}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <h3>=</h3>
          </div>
          <div className="input-group">
            <input type="text" value={convertedAmount} readOnly />

            <select value={toCurrency} onChange={handleToCurrencyChange}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  }


export default App;
