import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reportsView } from '../../actions/WebActions.js';
import "./style.css";

function Reports({ webRender, reportsView }) {
 
  useEffect(() => {
    reportsView()
  }, [])

  return(
    <div id="reports">
      <h1>Pantalla reports</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    webRender: state.web.webRender
  }
}

export default connect(mapStateToProps, { reportsView })(Reports);
