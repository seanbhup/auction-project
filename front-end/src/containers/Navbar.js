import React, {Component} from "react";
import logo from "../../public/images/ebay_logo.png";
import {Link} from "react-router";
import {connect} from "react-redux";
import Authorization from "../components/Authorization.js";



class Navbar extends Component{


    componentDidMount(){
        if (this.props.loginResponse === null){

        }
        // console.log(this.props.loginResponse);
    }

    render(){
        return(
            <div className="navbar">
                <div className="navbar-item navbar-logo">
                    <Link to="/">
                        <img className="ebay-logo" src={logo} role="presentation"></img>
                    </Link>
                </div>
                <div className="navbar-item navbar-search-input">
                    <input className="input-item input-box" type="text" placeholder="Search"></input>
                </div>
                <div className="navbar-item navbar-search-input">
                    <button className="input-item input-button">Search</button>
                </div>
                <div className="navbar-item create-listing">

                    <Authorization />
                    {/* }<Link to="/login">Login</Link>
                    <span> | </span>
                    <Link to="/register">Register</Link> */}
                </div>

                <hr className="nav-hr"></hr>
                <div className="sub-menu">
                    <div className="sub-menu-item create-listing">
                        <Link to="/create_listing">Create a Listing</Link>
                    </div>
                    <span className="sub-menu-pipe"> | </span>
                    <div className="sub-menu-item category">
                        <a href="/sporting_goods">Sporting Goods</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/fashion">Fashion</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/electronics">Electronics</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/books">Books</a>
                    </div>
                    <div className="sub-menu-item category">
                        <a href="/home_and_garden">Home and Garden</a>
                    </div>
                </div>

                <hr className="nav-hr"></hr>
            </div>

        )
    }
}

function mapStateToProps(state){
    // console.log(state.login);
    return{
        loginResponse: state.login
    }
}

export default connect(mapStateToProps,null)(Navbar);
