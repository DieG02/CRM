import React, { useEffect } from "react";
import { connect } from "react-redux";
import { homeView } from '../../actions/WebActions.js';
import "./style.css";

function Home({ webRender, homeView }) { 
  useEffect(() => {
    homeView()
  }, [])

  return(
    <div id="home">
      <h1>Pantalla Home</h1>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    webRender: state.web.webRender
  }
}

export default connect(mapStateToProps, { homeView })(Home);
