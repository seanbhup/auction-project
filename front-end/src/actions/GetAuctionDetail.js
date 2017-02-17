import $ from "jquery";

var GetAuctionDetail = (auctionId)=>{
    var thePromise = $.getJSON("http://localhost:3001/getAuctionItem/"+auctionId);
    // console.log(thePromise);
    return{
        type: "GET_AUCTION_DETAIL",
        payload: thePromise
    }
}


export default GetAuctionDetail;
