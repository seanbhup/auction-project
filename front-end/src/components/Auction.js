import React, {Component} from "react";
import {Link} from "react-router";

class Auction extends Component{
    render(){
        var auctionItem = this.props.item
        var auctionLink = "/auction/" + auctionItem.id;
        // console.log(this.props.item);
        return(
                <div className="listing">
                    <div className="listing-image-wrapper">
                        <img className="listing-image" src={auctionItem.url} role="presentation"></img>
                    </div>

                    <div className="listing-text-wrapper">
                        <div className="listing-text">
                            <Link to={auctionLink}>{auctionItem.title}</Link>
                        </div>
                        <hr className="listing-hr"></hr>
                        <div className="listing-description">
                            {auctionItem.description}
                        </div>
                    </div>
                    <div className="listing-info-wrapper">
                        <div className="listing-current-bid">
                            Current bid: ${auctionItem.current_bid}
                        </div>
                        <div className="listing-end-date">
                            Close Date: {auctionItem.end_date}
                        </div>
                        <div className="more-info-button-wrapper">
                            <button className="more-info-button">More Info</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Auction;
