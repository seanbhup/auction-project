var GetListingsReducer = function (state = [], action){
    switch(action.type){
        case "GET_LISTINGS":
            return action.payload
            break;
        default:


    }
    return state;
}


export default GetListingsReducer;
