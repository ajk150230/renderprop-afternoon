












import React, { Component } from 'react';
import './App.css';

import CurrencyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'
class App extends Component {
  render() {
    return (
      <>
        <h1>Currency Converter using Render Props</h1>
        <CurrencyConverter render={(currencyData, amount)=>(
          <>
          {console.log(currencyData)}
          <CurrencyDisplay currencyData={currencyData} amount={amount} />
          </>
        )}/>
      </>
    );
  }
}

export default App;
