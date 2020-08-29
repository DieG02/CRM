import React from "react";
import "./style.css";
import { GoogleICon } from "../index.jsx";

export default function Login() {
  
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
            <input className="form-control " type="password"/>
            <a href="/help" className="password">Olvidé mi contraseña</a>
          </div>
        </div>
        <button onClick={() => window.location.replace("/home")}>Iniciar Sesión</button>
        <div class="form-check check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label">Recordarme</label>
        </div>
        <div className="nav">
          <span>Iniciar sesión con </span>
          <GoogleICon/>
        </div>
      </div>
    </div>
  )
}