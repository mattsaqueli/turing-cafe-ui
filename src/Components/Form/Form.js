import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  render() {
    return (
      <form className="form-input">
        <input className="name-input" type="text" placeholder="Name" value={this.state.name}></input>
        <input className="date-input" type="text" placeholder="Date" value={this.state.date}></input>
        <input className="time-input" type="text" placeholder="Time" value={this.state.time}></input>
        <input className="guest-input" type="number" placeholder="Number of guests" value={this.state.number}></input>
        <button>Make A Reservation</button>
      </form>
    )
  }
}

export default Form