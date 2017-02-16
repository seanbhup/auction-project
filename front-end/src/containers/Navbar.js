import React, {Component} from "react";
import logo from "../../public/images/ebay_logo.png";
import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import {Link} from "react-router";





class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="navbar-item navbar-logo">
                    <Link to="/">
                        <img className="ebay-logo" src={logo}></img>
                    </Link>
                </div>
                <div className="navbar-item navbar-search-input">
                    <input className="input-item input-box" type="text" placeholder="Search"></input>
                </div>
                <div className="navbar-item navbar-search-input">
                    <button className="input-item input-button">Search</button>
                </div>
                <div className="navbar-item create-listing">
                    <Link to="/login">Login</Link>
                    <span> | </span>
                    <Link to="/register">Register</Link>
                </div>

                <hr></hr>
                <div className="sub-menu">
                    <div className="sub-menu-item create-listing">
                        <Link to="/create_listing">Create a Listing</Link>
                    </div>
                    <span className="sub-menu-pipe"> | </span>
                    <div className="sub-menu-item category">
                        <a href="/category1">Category 1</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/category2">Category 2</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/category3">Category 3</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/category4">Category 4</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/category5">Category 5</a>
                    </div>
                </div>

                <hr></hr>
            </div>

        )
    }
}

export default Navbar


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
