import React, {Component} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetTheWeather from "../actions/FetchWeatherAction.js";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipCode:''
        }
        this.changeZipCode = this.changeZipCode.bind(this);
        this.getWeather = this.getWeather.bind(this);

    }
    getWeather(event){
        event.preventDefault();
        this.props.GetTheWeather(this.state.zipCode);
        console.log(this.state.zipCode)
    }
    changeZipCode(event){
        this.setState({
            zipCode: event.target.value
        })
    }
    render(){
        var weatherData = this.props.weatherData;
        return(
            <div>
                <form onSubmit={this.props.GetTheWeather}>
                    <input
                        placeholder="Zip Code PLEASE"
                        value={this.state.zipCode}
                        onChange={this.changeZipCode}
                    />
                    <button type="submit" className="btn">
                        WEATHER
                    </button>
                </form>
                {weatherData}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        weatherData: state.weather
    }
}

function mapDispatchTopProps(dispatch){
    return bindActionCreators({GetTheWeather:GetTheWeather},dispatch);
}

export default connect(mapStateToProps,mapDispatchTopProps)(SearchBar);
