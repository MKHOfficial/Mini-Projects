import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
let API_URL= "https://api.openweathermap.org/data/2.5/weather";
let API_KEY= "3ffc916a4c2dbf086faae0f6a30a9ea0";

let getWeatherInfo = async ()=>{
    setError(false);
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse =await response.json();
        console.log(JsonResponse);
        let result= {
            city: city,
            temp : JsonResponse.main.temp,
            tempMin : JsonResponse.main.temp_min,
            tempMax : JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelsLike : JsonResponse.main.feels_like,
            weather : JsonResponse.weather[0].description
    
        }
        console.log(result);
        return result;

    }catch(err){
        throw err;
    }
};

let handleChange = (evt)=>{
    setCity(evt.target.value)
}

let handleSubmit = async (evt )=>{
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getWeatherInfo();
        updateInfo(newinfo);
    }catch(err){
        setError(true);
    }

    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                label="City name" 
                variant="outlined" 
                required 
                value={city} 
                onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='Submit'>Search</Button>
            </form>
        {error && <p style={{color : "red"}}>No such place exists!</p>}
        </div>
    )
}