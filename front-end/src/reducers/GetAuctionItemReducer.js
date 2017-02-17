var GetAuctionItemReducer = function (state = [], action){
    switch(action.type){
        case "GET_AUCTION_DETAIL":
            return action.payload
        default:
            return state;
    }
}

export default GetAuctionItemReducer;
