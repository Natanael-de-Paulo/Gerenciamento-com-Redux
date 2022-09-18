import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import * as icons from 'react-icons/md'
import './style.css'

export default function Home() {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')

      setTrips(response.data)
      console.log(response.data)
    }

    loadApi()
  }, [])

  return (
    <>
      <div>
        <div className="grid-container">
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>
                {' '}
                Status: {trip.status ? 'Disponivel' : 'Indisponivel'}{' '}
              </span>
              <button type="button" onClick={() => {}}>
                <div>
                  <icons.MdFlightTakeoff size={16} color="#FFF" />
                </div>
                <span>Solicitar reserva</span>
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}
