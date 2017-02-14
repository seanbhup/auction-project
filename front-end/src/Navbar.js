import React, {Component} from "react";
import logo from "./logo.svg";
import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";




class Navbar1 extends Component{
    render(){
        return(
            <div>hello</div>
        )
    }
}

export default Navbar1


{/*<div className="navbar1">
    <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" className="logo" href="/home">Logo</NavItem>
        <NavItem eventKey="2" className="search-box" title="Item"><input type="text" placeholder=""></input></NavItem>
        <NavItem eventKey="3" className="search-button" href="/?stuff">Search Submit</NavItem>
        <NavDropdown eventKey="4" title="Search by Category" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
    </Nav>
</div> */}



{/* }<div className="navbar">
    <div className="brand">
        <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="search-box-wrapper">
        <input placeholder="STUFF HERE" type="text" className="search-box"></input>
    </div>
    <div className="search-submit">
        <button type="submit" className="search-button btn btn-warning">SEARCH</button>
    </div>
</div> */}
