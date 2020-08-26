import React from "react";
import "./style.css";

export default function Home() {
  
  return(
    <div id="login">
      <div className="container">
        <h3>INICIAR SESIÓN</h3>
        <div className="inputs">
          <div>
            <p>Correo Electrónico</p>
            <input className="form-control" type="email"/>
          </div>
          <div>
            <p>Contraseña</p>
            <input className="form-control" type="password"/>
          </div>
        </div>
        <button>Iniciar Sesión</button>
        <p>accede rapidamente</p>
        <div className="nav">
          <button>Place</button>
          <button>Place</button>
          <button>Place</button>
        </div>
      </div>
    </div>
  )
}