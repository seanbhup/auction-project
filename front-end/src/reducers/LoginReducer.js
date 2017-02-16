var LoginReducer = function (state = [], action){
    // console.log(action.type);
    switch(action.type){
        case "LOGIN":
            return action.payload;
        default:
    }
    return state;
}


export default LoginReducer;
