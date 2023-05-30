import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = (event) => {
  const { name, value } = event.target
  this.setState({ [name]: value })
}

  saveReservation = (event) => {
    event.preventDefault()
    const newRes = {
      ...this.state,
      id: Date.now()
    }
    this.props.addReservation(newRes)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      number: ""
    })
  }

  render() {
    return (
      <form className="form-input">
        <input className="name-input" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}></input>
        <input className="date-input" name="date" type="text" placeholder="Date (mm/dd)" value={this.state.date} onChange={this.handleChange}></input>
        <input className="time-input" name="time" type="text" placeholder="Time" value={this.state.time} onChange={this.handleChange}></input>
        <input className="guest-input" name="number" type="number" placeholder="Number of guests" value={this.state.number} onChange={this.handleChange}></input>
        <button onClick={this.saveReservation}>Make A Reservation</button>
      </form>
    )
  }
}

export default Form