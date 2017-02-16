import $ from "jquery";

var RegisterAction = (registerData)=>{
    var thePromise =
        $.ajax({
            method: "POST",
            url: "http://localhost:3001/register",
            data: registerData
        });

    return{
        type: "REGISTER",
        payload: thePromise
    }
}


export default RegisterAction;
