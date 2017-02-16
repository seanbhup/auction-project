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
        this.props.listingsData;
        // this.props.getListingsData();
        // console.log(this.props.listingsData);

        var listingAuctions = [];
        this.props.listingsData.map((auction,index)=>{
            listingAuctions.push(<Auction key={index} item={auction} />);
        })

        return(
            <div className="landing-page-wrapper">
                <h2 className="featured-title">
                    Featured
                </h2>
                <div>{listingAuctions}</div>
                <div className="listing-image-wrapper">
                    <div className="listing1">
                        <img className="listing1-image" src="http://placehold.it/100x100"></img>
                        <div className="listing1-text">Item 1 name</div>
                    </div>
                    <div className="listing2">
                        <img className="listing2-image" src="http://placehold.it/100x100"></img>
                        <div className="listing2-text">Item 2 name</div>
                    </div>
                    <div className="listing3">
                        <img className="listing3-image" src="http://placehold.it/100x100"></img>
                        <div className="listing3-text">Item 3 name</div>
                    </div>


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
