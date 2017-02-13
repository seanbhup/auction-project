import React, {Component} from "react";
// import logo from "./logo.svg";
import logo from "./ebay_logo.png";
import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";




class Navbar1 extends Component{
    render(){
        return(
            <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                <NavItem className="brand" eventKey="1" href="/home"><img src={logo} className="logo" alt="logo" /></NavItem>
                <NavItem className="search-input" eventKey="2"><input type="text" placeholder="Search"></input></NavItem>
                <NavItem className="search-button" eventKey="3" href="/item1"><button type="submit" className="btn-warning btn">Search</button></NavItem>
                <NavDropdown eventKey="4" title="Choose Category" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Collectibles & Art</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.2">Electronics</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.3">Sporting Goods</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">Home & Garden</MenuItem>

                </NavDropdown>
            </Nav>
        )
    }
}

export default Navbar1


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
