import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import Reservation from '../Reservation/Reservation';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservationData => {
      this.setState({
        reservations: reservationData
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservation reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
