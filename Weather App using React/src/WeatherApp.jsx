import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]= useState({
        city : "Phalia",
        feelsLike:38.02,
        humidity:58,
        temp:32.67,
        tempMax:32.67,
        tempMin:32.67,
        weather: "overcast clouds"
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}