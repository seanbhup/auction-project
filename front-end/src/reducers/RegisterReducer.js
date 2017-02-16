var RegisterReducer = function (state = [], action){
    // console.log(action.type);
    switch(action.type){
        case "REGISTER":
            return action.payload;
    }
    return state;
}


export default RegisterReducer;
