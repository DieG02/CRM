import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactsView } from '../../actions/WebActions.js';
import "./style.css";

export default function Contacts() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsView());
  }, [])

  return(
    <div id="contacts">
      <h1>Pantalla Contactos</h1>
    </div>
  )
}