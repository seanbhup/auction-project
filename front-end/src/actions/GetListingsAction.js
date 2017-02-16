import $ from "jquery";

var GetListingsAction = ()=>{
    var thePromise = $.getJSON("http://localhost:3001/getHomeAuctions")
    // console.log(thePromise);
    return{
        type: "GET_LISTINGS",
        payload: thePromise
    }
}


export default GetListingsAction;
