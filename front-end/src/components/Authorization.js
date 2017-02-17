import React, {Component} from "react";
import {Link} from "react-router";

class Authorization extends Component{
    render(){

        return(
            <div>
                <Link to="/login">Login</Link>
                <span> | </span>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}

export default Authorization;
