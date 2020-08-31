import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productsView } from '../../actions/WebActions.js';
import "./style.css";

export default function Products() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsView());
  }, [])

  return(
    <div id="products">
      <h1>Pantala Products</h1>
    </div>
  )
}