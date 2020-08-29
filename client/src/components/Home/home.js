import React from "react";
import { 
  Libro, 
  Agregar, 
  Calendario, 
  Notificaciones, 
  Preguntas, 
  Configuraciones,

  Pizarra,
  Prospectos,
  Tratos,
  Contactos,
  Productos,
  Documentos,
  Reportes
} from "../index.jsx";
import "./style.css";

export default function Home() {
  const fillIn = (id) => { document.getElementById(`${id}`).setAttribute("fill", "#0066FF") }
  const fillOut = (id) => { document.getElementById(`${id}`).setAttribute("fill", "#FFFFFF") }
  return(
    <div id="home">
      <header>
        <div className="title">
          <h1>Inicio</h1> 
        </div>
        <div className="search">
          <button className="form-control"><Libro/></button>
          <input className="form-control" placeholder="Búsqueda rápida"/>
          <button className="form-control"><Agregar/></button>
        </div>
        <div className="options">
          <button className="form-control"><Calendario/></button>
          <button className="form-control"><Notificaciones/></button>
          <button className="form-control"><Preguntas/></button>
          <button className="form-control"><Configuraciones/></button>
          <button className="form-control">BB</button>
        </div>
      </header>
      <nav>
        <a href="home">LOGO</a>
        <a href="/home" onMouseOver={() => fillIn('homeIcon')} onMouseOut={() => fillOut('homeIcon')}>
          <Pizarra/>
        </a>
        <a href="/leads" onMouseOver={() => fillIn('leadsIcon')} onMouseOut={() => fillOut('leadsIcon')}>
          <Prospectos/>
        </a>
        <a href="/deals" onMouseOver={() => fillIn('dealsIcon')} onMouseOut={() => fillOut('dealsIcon')}>
          <Tratos/>
        </a>
        <a href="/contacts" onMouseOver={() => fillIn('contactsIcon')} onMouseOut={() => fillOut('contactsIcon')}>
          <Contactos/>
        </a>
        <a href="products/" onMouseOver={() => fillIn('productsIcon')} onMouseOut={() => fillOut('productsIcon')}>
          <Productos/>
        </a>
        <a href="/documents" onMouseOver={() => fillIn('documentsIcon')} onMouseOut={() => fillOut('documentsIcon')}>
          <Documentos/>
        </a> 
        <a href="reports/" onMouseOver={() => fillIn('reportsIcon')} onMouseOut={() => fillOut('reportsIcon')}>
          <Reportes/>
        </a>
      </nav>
    </div>
  )
}