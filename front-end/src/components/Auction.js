import React, {Component} from "react";

class Auction extends Component{
    render(){
        var auctionItem = this.props.item
        // console.log(this.props.item);
        return(
            <div>
                <div>
                    <div>{auctionItem.title}</div>
                    <div>{auctionItem.description}</div>
                    <img className="auction-image" src={auctionItem.url}></img>

                </div>
            </div>
        )
    }
}

export default Auction;
