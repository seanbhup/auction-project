import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import GetAuctionDetail from "../actions/GetAuctionDetail.js";
import SubmitBidAction from "../actions/SubmitBidAction.js";


class AuctionItem extends Component{
    constructor(props){
        super(props);
        this.submitBid = this.submitBid.bind(this);
    }

    componentDidMount(){
        var auctionId = this.props.params.auctionId;
        this.props.getThisAuction(auctionId);
    }

    submitBid(event){
        event.preventDefault();
        if(this.props.userToken === undefined){

        }else{
            var bidAmount = Number(event.target[0].value);
            var auctionItem = this.props.auctionItemDetail[0];
            if(auctionItem.current_bid === "No bids yet."){
                auctionItem.current_bid = auctionItem.starting_bid - .01;
            }else if (bidAmount < auctionItem.current_bid){
                console.log("bid low")
            }else{
                console.log("submit to express")
                this.props.submitBidToExpress(bidAmount, auctionItem.id, this.props.userToken)
            }
        }

    }

    render(){
        if(this.props.auctionItemDetail.length === 0){
            return (<h1>Loading Auction...</h1>)
        }
        var auctionItem = this.props.auctionItemDetail[0];
        if(auctionItem.current_bid === null){
            auctionItem.current_bid = "No bids yet."
        }
        if(auctionItem.high_bidder_id === null){
            auctionItem.high_bidder_id = "No one has bid on this yet."
        }
        return(
            <div className="landing-page-wrapper">
                <h1>{auctionItem.title}</h1>
                <h3>{auctionItem.description}</h3>
                <p>Current High Bid: {auctionItem.current_bid}</p>
                <p>Highest bidder: {auctionItem.high_bidder_id}</p>
                <p>Starting bid: {auctionItem.starting_bid}</p>
                <form onSubmit={this.submitBid}>
                    <input type="number" placeholder="Enter your bid"></input>
                    <button type="submit">Bid</button>
                </form>

            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        auctionItemDetail: state.auctionItem,
        userToken: state.login.token
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getThisAuction: GetAuctionDetail,
        submitBidToExpress: SubmitBidAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionItem);
