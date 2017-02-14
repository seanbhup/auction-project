var WeatherReducer = function (state = null, action){
    console.log(action.type);
    switch(action.type){
    case "GET_WEATHER": return (action.payload);

    }
    return state;
}


export default WeatherReducer;
