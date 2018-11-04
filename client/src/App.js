import React, { Component } from "react";
import Header from "./Header";
import TODOs from "./TODOs";
import Footer from "./Footer";
import "./css/app.css";

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
