import React from "react";
import { connect } from "react-redux";
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

import Home from "../Home/home.js";
import Leads from "../Leads/leads.js";
import Deals from "../Deals/deals.js";
import Contacts from "../Contacts/contacts.js";
import Products from "../Products/products.js";
import Documents from "../Documents/documents.js";
import Reports from "../Reports/reports.js";

import "./style.css";

function Frame({ view, webRender }) {
  const fillIn = (id) => { document.getElementById(`${id}`).setAttribute("fill", "#0066FF") }
  const fillOut = (id) => { document.getElementById(`${id}`).setAttribute("fill", "#FFFFFF") }


  const componentWillMount = (component) => {
    switch(component){
      case 'home':
        return <Home/>;
      case 'leads':
        return <Leads/>;
      case 'deals':
        return <Deals/>;
      case 'contacts':
        return <Contacts/>;
      case 'products':
        return <Products/>;
      case 'documents':
        return <Documents/>;
      case 'reports':
        return <Reports/>;
    }
  }

  return(
    <div id="frame">
      <header>
        <div className="title">
          <h1>{webRender.title}</h1> 
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
        <a href="/home" className={`${webRender.logo.home}`} onMouseOver={() => fillIn('homeIcon')} onMouseOut={() => fillOut('homeIcon')}>
          <Pizarra/>
        </a>
        <a href="/leads" className={`${webRender.logo.leads}`} onMouseOver={() => fillIn('leadsIcon')} onMouseOut={() => fillOut('leadsIcon')}>
          <Prospectos/>
        </a>
        <a href="/deals" className={`${webRender.logo.deals}`} onMouseOver={() => fillIn('dealsIcon')} onMouseOut={() => fillOut('dealsIcon')}>
          <Tratos/>
        </a>
        <a href="/contacts" className={`${webRender.logo.contacts}`} onMouseOver={() => fillIn('contactsIcon')} onMouseOut={() => fillOut('contactsIcon')}>
          <Contactos/>
        </a>
        <a href="/products" className={`${webRender.logo.products}`} onMouseOver={() => fillIn('productsIcon')} onMouseOut={() => fillOut('productsIcon')}>
          <Productos/>
        </a>
        <a href="/documents" className={`${webRender.logo.documents}`} onMouseOver={() => fillIn('documentsIcon')} onMouseOut={() => fillOut('documentsIcon')}>
          <Documentos/>
        </a> 
        <a href="/reports" className={`${webRender.logo.reports}`} onMouseOver={() => fillIn('reportsIcon')} onMouseOut={() => fillOut('reportsIcon')}>
          <Reportes/>
        </a>
      </nav>
      <div className="component">
        {componentWillMount(view)}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    webRender: state.web.webRender
  }
}

export default connect(mapStateToProps, {})(Frame);
