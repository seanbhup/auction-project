import React, {Component} from "react"
import Navbar1 from "./Navbar.js";

class MyCart extends Component{
    render(){
        return(

            <div>
                <Navbar1 />
                <div className="landing-page-wrapper">
                    <h2 className="featured-title">
                        My Cart
                    </h2>
                </div>
            </div>
        )
    }

}

export default MyCart;
