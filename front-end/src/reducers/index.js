import {combineReducers} from "redux";
import GetListingsReducer from "./GetListingsReducer";
// import WeatherReducer from "./WeatherReducer.js";
// import MovieReducer from "./MovieReducer.js";
import RegisterReducer from "./RegisterReducer";

const rootReducer = combineReducers({
    // weather: WeatherReducer,
    // movie: MovieReducer
    listings: GetListingsReducer,
    register: RegisterReducer
});

export default rootReducer;

//        __                                     __
// ____  / /_     ____ ___  __  __   ____  _____/ /_
// / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
// / /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
// \____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
