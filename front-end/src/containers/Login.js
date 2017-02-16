import React, {Component} from "react"
import Navbar from "./Navbar";
import {Link} from "react-router";

class Login extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="landing-page-wrapper">
                    <h2 className="login-title">
                        Login
                    </h2>
                    <form>
                        <input type="text" placeholder="username"></input>
                        <input type="text" placeholder="password"></input>
                        <button type="submit">Continue</button>
                    </form>
                    <h3>
                        Not signed up yet? <Link to="/register">Register here</Link> you filthy animal.
                    </h3>
                </div>

            </div>

        )
    }

}

export default Login;
