import $ from "jquery";

var SubmitBidAction = (bidAmount, auctionItemId, userToken)=>{
    var bidInfo ={
        bidAmount: bidAmount,
        auctionItem: auctionItemId,
        userToken: userToken
    }
    var thePromise = $.ajax({
        method: "POST",
        url: "http://localhost:3001/submitBid/",
        data: bidInfo
    })
    // // console.log(thePromise);
    return{
        type: "SUBMIT_BID"
        // payload: thePromise
    }
}


export default SubmitBidAction;
