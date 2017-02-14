import React, {Component} from "react";
import logo from "./logo.svg";
import Navbar1 from "./Navbar";
import SearchBar from "./containers/SearchBar.js";




class Home extends Component{
    render(){
        return(
        <div>
            {/* <SearchBar /> */}
            <Navbar1 />
            {/* <div className="main-image"></div> */}
        </div>
        )
    }
}

export default Home
