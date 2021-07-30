import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="title">Confirm Purchase</p>
        <div className="input-feild">
          <form action="" className="form">   
            <table>
              <tr>
                <td><label htmlFor="">Card Holder</label></td>
                <td><input type="text" name="card-holder-name" id="card-holder-name" placeholder="" className="type"/></td>
              </tr>
              <tr>
                <td><label htmlFor="">Postal Code</label></td>
                <td><input type="text" name="postal-code" id="postal-code" placeholder="" className="type"/></td>
              </tr>
              <tr>
                <td><label htmlFor="">Card Number</label></td>
                <td><input type="text" name="card-number" id="card-number" placeholder="" className="type" /></td>
              </tr>
              <tr>
                <td><label htmlFor="">CVV</label></td>
                <td><input type="password" name="security-code" id="cvv" placeholder="" className="type"/></td>
              </tr>
              <tr>
                <td><label htmlFor="">Valid until</label></td>
                <td><input type="date" name="date" id="date" className="align-left type"/></td>
              </tr>
            </table>
            <div className="radio-list">
              <input type="radio" name="card-type" id="visa" className="radio"/> <img src="visa.png" alt=""/> 
              <input type="radio" name="card-type" id="mastercard" className="radio"/> <img src="mastercard.png" alt="" />
              <input type="radio" name="card-type" id="americanexpress" className="radio"/> <img src="amexpress.png" alt="" />
              <input type="radio" name="card-type" id="capitalone" className="radio"/> <img src="capitalone.jpg" alt="" />
              <input type="radio" name="card-type" id="chase" className="radio"/> <img src="chase.jpg" alt="" />
            </div>
            <input type="button" value="Submit" className="button"/>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
