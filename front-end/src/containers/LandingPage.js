import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import GetListingsAction from "../actions/GetListingsAction.js"
import Auction from "../components/Auction.js"

class LandingPage extends Component{

    componentDidMount(){
        this.props.getListingsData();
    }

    render(){
        // this.props.listingsData;
        // this.props.getListingsData();
        // console.log(this.props.listingsData);

        var listings = [];
        this.props.listingsData.map((auction,index)=>{
            return listings.push(<Auction key={index} item={auction} />);

        })

        return(
            <div className="landing-page-wrapper">
                <h2 className="featured-title">
                    Featured
                </h2>
                <hr></hr>
                {/* <div>{listings}</div> */}
                    <div className="listing-image-wrapper">
                        {listings}
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        listingsData: state.listings
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getListingsData: GetListingsAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
