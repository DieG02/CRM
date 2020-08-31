import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { documentsView } from '../../actions/WebActions.js';
import "./style.css";

export default function Documents() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(documentsView());
  }, [])

  return(
    <div id="documents">
      <h1>Pantalla Documents</h1>
    </div>
  )
}