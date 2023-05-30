import React from 'react'
import './Reservation.css'

const Reservation = ({ reservations }) => {
  const reservationCard = reservations.map(reservation => {
    return (
      <article className='individual-reservation' key={reservation.id}>
        <h1>{reservation.name}</h1>
        <p>{reservation.date}</p>
        <p>{reservation.time}</p>
        <p>Number of guests: {reservation.number}</p>
      </article>
    )
  })

  return (
    <>
    {reservationCard}
    </>
  )
}

export default Reservation