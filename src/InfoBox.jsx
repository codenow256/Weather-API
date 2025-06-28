import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css";
export default function InfoBox({info}){
    let INIT_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let COLD_URL="https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1609615320268-9a55048f249d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UkFJTnxlbnwwfHwwfHx8MA%3D%3D";
    return (
 <div className="InfoBox">
  <div className="cardContent">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="weather image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature : {info.temp}&deg;C</p>         
         <p>Humidity : {info.humidity}</p>
         <p>Min Temp : {info.tempMin}&deg;C</p>       
         <p>Max Temp : {info.tempMax}&deg;C</p>
         <p>the weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>        
         </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}