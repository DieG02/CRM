import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dealsView } from '../../actions/WebActions.js';
import "./style.css";

export default function Deals() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dealsView());
  }, [])

  return(
    <div id="deals">
      <h1>Pantalla Deals</h1>
    </div>
  )
}