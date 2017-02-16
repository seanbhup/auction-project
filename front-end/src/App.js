import React, { Component } from 'react';
import '../public/stylesheets/styles.css';
import Navbar from "./containers/Navbar.js";
import LandingPage from "./containers/LandingPage.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        {/* <SearchBar /> */}
        {/* <div className="main-image"></div> */}
      </div>
    );
  }
}

export default App;
