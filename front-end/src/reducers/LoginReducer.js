var LoginReducer = function (state = null, action){
    // console.log(action.type);
    switch(action.type){
        case "LOGIN":
            return action.payload;
        default:
    }
    return state;
}


export default LoginReducer;
