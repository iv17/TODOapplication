import React, { Component } from "react";
import Header from "../containers/Header";
import TODOs from "../containers/TODOs";
import Footer from "../containers/Footer";
import "../css/app.css";

class App extends Component {
  render() {
    return (
      <div className="page-wrap">
        <Header/>
        <TODOs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
