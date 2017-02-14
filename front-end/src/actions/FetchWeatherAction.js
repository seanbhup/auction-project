import $ from "jquery";
// import axios from "axios"
// var zipCode = "30305";
const apiKey = "482c145ce8edf1d69ea5168f9d06460c";
const weatherUrl = "api.openweathermap.org/data/2.5/weather?units=imperial&appid="+apiKey+"&zip=";

var GetTheWeather = (zipCode)=>{
    console.log("Action running!", zipCode)
    const fullWeatherUrl = weatherUrl+zipCode
    const thePromise = $.getJSON(fullWeatherUrl);
        return{
            type: "GET_WEATHER",
            payload: thePromise
        }
}

export default GetTheWeather
