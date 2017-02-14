import React, { Component } from 'react';
import '../public/stylesheets/styles.css';
import Navbar1 from "./Navbar.js";
import Home from "./Home.js";
import SearchBar from "./containers/SearchBar.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
