import React, {Component} from "react";
import {Link} from "react-router";

class Authorization extends Component{
    render(){

        return(
            <div>
                <div>
                    <Link to="/login">Login</Link>
                    <span> | </span>
                    <Link to="/register">Register</Link>
                    <span> | </span>
                    <Link to="/my-cart">Cart</Link>
                </div>
                {/* <div className="my-cart-wrapper">
                    <Link to="/my-cart">My Cart</Link>
                </div> */}
            </div>

        )
    }
}

export default Authorization;
