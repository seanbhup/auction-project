import React, {Component} from "react"
import Navbar from "./Navbar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LoginAction from "../actions/LoginAction.js";
import {browserHistory} from "react-router";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: ""
        }
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    componentDidUpdate() {
       if (this.props.loginResponse.msg === 'badUsername') {
           this.setState({
               message: 'Invalid username'
           });
       }else if(this.props.loginResponse.msg === 'loginFailure'){
           this.setState({
               message: 'Wrong. Try again'
           });
       }else if(this.props.loginResponse.msg === 'loginSuccess'){
           browserHistory.push('/');
       }
   }


    loginSubmit(event){
        var userName = event.target[0].value;
        var password = event.target[1].value;
        event.preventDefault();
        this.props.loginAction({
            username: userName,
            password: password
        });
    }

    render(){

        return(
            <div>
                <Navbar />
                <div className="landing-page-wrapper">
                    <h2 className="login-title">
                        Login
                    </h2>
                    <form onSubmit={this.loginSubmit}>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button type="submit">Continue</button>
                    </form>
                    <img height="300px" role="presentation" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/19/08/scarface.jpg"></img>
                    <h3>
                        Not signed up yet? <Link to="/register">Register here</Link> you filthy animal.
                    </h3>
                </div>
            </div>

        )
    }

}

function mapStateToProps(state){
    return{
        loginResponse: state.login
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        loginAction: LoginAction
    }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
