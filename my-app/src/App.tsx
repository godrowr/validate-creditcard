import React, { Component } from "react";
import ReactDOM from "react-dom";
import { isPropertySignature } from "typescript";
import './App.css';

interface props {}
interface state {}
interface event {}

// function App() {
//   return (
 class App extends React.Component<any,any> {
    constructor(props : any){
      super(props);
      this.state = {
        holder: '',
        postal: '',
        number: '',
        cvv: '',
        expiry: '',
        cardtype: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event : any) {
      const target = event.target;
      const value = target.type == 'radio' ? target.id : target.value;
      const name = target.name;
      this.setState({
        [name]: value });
    }

    handleSubmit(event : any) {
      if (this.validate()) {

        alert('holder: ' + this.state.holder + 
        '\npostal: ' + this.state.postal +
        '\nnumber: ' + this.state.number +
        '\ncvv: ' + this.state.cvv +
        '\nexpiry: ' + this.state.expiry +
        '\ncardtype ' + this.state.cardtype);
      }
      event.preventDefault();
    }

    validate() {
      var submit = true;
      const match_postal = /([A-Za-z]){1}([0-9]){1}([A-Za-z])\s([0-9]){1}([A-Za-z]){1}([0-9]){1}/
      const match_holder = /([A-Za-z ][^0-9\+])/
      const match_number = /([0-9]){13,}/
      const match_cvv = /([0-9]){3}/
      if (!this.state.holder){
        const elem = <p className="warning"> ** Note: Card holder cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-holder'))
        submit = false;
      } else if ((!this.state.holder.match(match_holder))) {
        const elem = <p className="warning"> ** Note: Please use a valid card holder name.</p>;
        ReactDOM.render(elem, document.getElementById('warning-holder'))
        submit = false;
      } else {
        const elem = <p className="warning"> </p>;
        ReactDOM.render(elem, document.getElementById('warning-holder'))
        submit = true;
      }
      if (!this.state.postal) {
        const elem = <p className="warning"> ** Note: Postal cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-postal'))
        submit = false;
      }
      else if (!this.state.postal.match(match_postal)){
        const elem = <p className="warning">** Note: Please use a valid Postal code.</p>;
        ReactDOM.render(elem, document.getElementById('warning-postal'))
        submit = false;
      } else {
        const elem = <p className="warning"></p>;
        ReactDOM.render(elem, document.getElementById('warning-postal'))
        submit = true;
      }
      if (!this.state.number) {
        const elem = <p className="warning"> ** Note: Card Number cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-number'))
        submit = false;
      }
      else if (!this.state.number.match(match_number)){
        const elem = <p className="warning">** Note: Please use a valid card number.</p>;
        ReactDOM.render(elem, document.getElementById('warning-number'))
        submit = false;
      } else {
        const elem = <p className="warning"></p>;
        ReactDOM.render(elem, document.getElementById('warning-number'))
        submit = true;
      }
      if (!this.state.cvv) {
        const elem = <p className="warning"> ** Note: CVV cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-cvv'))
        submit = false;
      } else if(!this.state.cvv.match(match_cvv)){
        const elem = <p className="warning">** Note: Please use a valid CVV code.</p>;
        ReactDOM.render(elem, document.getElementById('warning-cvv'))
        submit = false;
      } else {
        const elem = <p className="warning"></p>;
        ReactDOM.render(elem, document.getElementById('warning-cvv'))
        submit = true;
      }
      if (!this.state.cardtype) {
        const elem = <p className="warning"> ** Note: Card type cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-cardtype'))
        submit = false;
      }

      if (!this.state.expiry){
        const elem = <p className="warning"> ** Note: Expiry date cannot be empty</p>;
        ReactDOM.render(elem, document.getElementById('warning-expiry'))
        submit = false;
      } 
      // else if expiry date earlier than todays date (check some server not local computer). 

      return submit
    }

    render() {
      return (
    <div className="App">
      <header className="App-header">
      <p className="title">Confirm Purchase</p>
        <div className="input-feild">
          <form onSubmit={this.handleSubmit} className="form">   
            <table>
              <tr>
                <td><label htmlFor="">Card Holder</label></td>
                <td><input type="text" 
                name="holder" 
                id="card-holder-name" placeholder="" 
                className="type"
                value={this.state.holder}
                onChange={this.handleChange}
                /></td>
              </tr>
              <tr >
                <td></td>
                <td id="warning-holder" className="warning"></td>
              </tr>
              <tr>
                <td><label htmlFor="">Postal Code</label></td>
                <td><input type="text" 
                  name="postal"
                  id="postal-code" placeholder=""
                  className="type"
                  value={this.state.postal}
                  onChange={this.handleChange}
                  /></td>
              </tr>
              <tr>
                <td></td>
                <td id="warning-postal" className="warning"></td>
              </tr>
              <tr>
                <td><label htmlFor="">Card Number</label></td>
                <td><input type="text" 
                name="number" id="card-number"
                placeholder="" className="type"
                value={this.state.number}
                onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td></td>
                <td id="warning-number" className="warning"></td>
              </tr>
              <tr>
                <td><label htmlFor="">CVV</label></td>
                <td><input type="password" 
                name="cvv" id="cvv" 
                placeholder="" className="type"
                value={this.state.cvv}
                onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td></td>
                <td id="warning-cvv" className="warning"></td>
              </tr>
              <tr>
                <td><label htmlFor="">Valid until</label></td>
                <td><input type="date" name="expiry"
                 id="date" 
                 className="align-left type"
                 value={this.state.expiry}
                 onChange={this.handleChange}
                 /></td>
              </tr>
              <tr>
              <td></td>
                <td id="warning-expiry" className="warning"></td>
              </tr>
            </table>
            <div className="radio-list">
              <input type="radio" name="cardtype" id="Visa" className="radio" value="visa" onClick={this.handleChange}/> <img src="visa.png" alt=""/> 
              <input type="radio" name="cardtype" id="Mastercard" className="radio" value="mastercard"  onClick={this.handleChange}/> <img src="mastercard.png" alt="" />
              <input type="radio" name="cardtype" id="Americanexpress" className="radio" value="americanexpress" onClick={this.handleChange}/> <img src="amexpress.png" alt="" />
              <input type="radio" name="cardtype" id="Capitalone" className="radio" value="capitalone"  onClick={this.handleChange}/> <img src="capitalone.jpg" alt="" />
              <input type="radio" name="cardtype" id="Chase" className="radio" value="chase" onClick={this.handleChange}/> <img src="chase.jpg" alt="" />
            </div>
            <div id="warning-cardtype"></div>
            <input type="submit" value="Submit" className="button"/>
          </form>
        </div>
      </header>
    </div>
  );}
            
}

export default App;
