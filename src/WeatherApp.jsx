import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
      const [weatherInfo,setWeatherInfo] = useState({ 
        city:"Delhi",
        feelsLike:24.04,
        temp: 28.96,
        tempMax: 28.96,
        tempMin: 28.96,
        humidity: 66,
        weather: "overcast clouds",
      });

      let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
      }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather app</h3>
              <SearchBox updateInfo={updateInfo}/>
              <InfoBox info={weatherInfo}/>
        </div>
    );
}