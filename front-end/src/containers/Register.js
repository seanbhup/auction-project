import React, {Component} from "react"
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RegisterAction from "../actions/RegisterAction";
import $ from "jquery";

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

    makePayment(){
        var handler = window.StripeCheckout.configure({
            key: "pk_test_W2tSNJsx86z8YohBvf9bH2Eh",
            locale: "auto",
            token: (stripeToken)=>{
                console.log(stripeToken)
                var theData = {
                    amount: 10 * 100,
                    stripeToken: stripeToken.id,
                    token: localStorage.getItem("token")
                }
                $.ajax({
                    method: "POST",
                    url: "http://localhost:3001/stripe",
                    data: theData
                }).done((data)=>{
                    // console.log(data);
                    if(data.msg=="paymentSuccess"){

                    }
                });
            }
        });
        handler.open({
            name: "Buy from auction",
            description: "Pay for auction",
            amount: 10*100,
            image: "https://www.base64-image.de/build/img/mr-base64-482fa1f767.png"
        });
    }

    render(){
        if(this.props.registerResponse.msg === "userNameTaken"){
            var message = "User name is taken";
        }else if(this.props.registerResponse.msg === "userInserted"){
            message = "User was Inserted";
        }else{
            message = '';
        }
        // console.log(this.props.registerAction());
        return(
            <div>
                <Navbar />
                <div className="landing-page-wrapper">
                    <h2 className="login-title">
                        Please enter your registration Info
                        {message}
                    </h2>
                    <hr></hr>
                    <div className="form-wrapper">
                        <form  className="register-form" onSubmit={this.registrationSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-input" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-input" placeholder="Username"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-input" placeholder="Password"></input>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control form-input" placeholder="Register"></input>
                            </div>
                        </form>
                    </div>
                    <button className="btn btn-primary pay-now-button" onClick={this.makePayment}>Pay now</button>
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
