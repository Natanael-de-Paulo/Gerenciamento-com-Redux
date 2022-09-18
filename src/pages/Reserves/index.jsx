import React from "react"

import * as icons from 'react-icons/md'
import './style.css'

export default function Reserves(){
  return(
    <>
      <div className="container">
        <h1>Você solicitou 1 reservas</h1>
        <div className="reserves">
          <img src={"https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"} alt="Maceio" />
          <strong>Viagem maceio 7 dias</strong>
          <span>Quantidade: 2</span>
          <button type="button" onClick={() => {}}>
            <icons.MdDelete  size={20} color="#191919"/>
          </button>
        </div>
        <footer>
          <button type="button" onClick={() =>{}}>Solicitar reservas</button>
        </footer>
      </div>
    </>
  )
}