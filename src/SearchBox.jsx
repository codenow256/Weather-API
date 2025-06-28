import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState} from 'react';

export default function Searchbox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e93ee71cdc793f15be41c3631024c4c7";

    let getWeatherInfo = async () => {
        try{   let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        let result = {
             city:city,
             temp:jsonResponse.main.temp,
             tempMin:jsonResponse.main.temp_min,
             tempMax:jsonResponse.main.temp_max,
             humidity:jsonResponse.main.humidity,
             feelsLike:jsonResponse.main.feels_like,
             weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
       throw err;
    }
     
    }
    let handleEventChange = (event) => {
    setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{       
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>

        <TextField 
        id="city" 
        label="city name"
         variant="outlined" 
         required 
         value={city}
         onChange={handleEventChange}/>
<br></br><br></br>
        <Button 
        variant="contained" 
        type="submit"
        >Search</Button>
     {error && <p style={{color:"red"}}>No such place exists</p>}
        </form>
        </div>
    );
}