import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { leadsView } from '../../actions/WebActions.js';
import "./style.css";

export default function Leads() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leadsView());
  }, [])

  return(
    <div id="leads">
      <h1>Pantalla Leads</h1>
    </div>
  )
}
