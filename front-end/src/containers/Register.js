import React, {Component} from "react"
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RegisterAction from "../actions/RegisterAction";

class Register extends Component{
    constructor(props){
        super(props);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.state = {
            registrationResponse: ''
        }
    }

    registrationSubmit(event){
        event.preventDefault();
        // console.dir(event.target);
        var email = event.target[0].value;
        var username = event.target[1].value;
        var password = event.target[2].value;

        console.log(email, username, password);
        this.props.registerAction({
            email: email,
            username: username,
            password: password
        })
    }

    render(){
        if(this.props.registerResponse.msg === "userNameTaken"){
            var message = "User name is taken";
        }else if(this.props.registerResponse.msg === "userInserted"){
            var message = "User was Inserted";
        }else{
            var message = '';
        }
        // console.log(this.props.registerAction());
        return(
            <div>
                <Navbar />
                <div className="landing-page-wrapper">
                    <h2 className="login-title">
                        Register
                        {message}
                    </h2>

                    <form onSubmit={this.registrationSubmit}>
                        Email Address<input type="text" placeholder="Email"></input>
                        Username<input type="text" placeholder="Username"></input>
                        Password<input type="password" placeholder="Password"></input>
                        Register<input type="submit" placeholder="Register"></input>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        registerResponse: state.register
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);
