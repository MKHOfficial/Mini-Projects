import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL= "https://images.unsplash.com/photo-1719958805412-046289afa93e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";

    let COLD_URL= "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let HOT_URL= "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAINY_URL= "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="InfoBox">
        <div className='CardHolder'>

       
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
            info.humidity >80
            ? RAINY_URL :
            info.temp > 15 ?
            HOT_URL 
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent className='Content'>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p>Temperature : {info.temp}<br/>
        Humidity : {info.humidity}<br/>
        Min Temp : {info.tempMax}&deg;C<br/>
        Max Temp : {info.tempMax}&deg;C<br/>
        The weather can be described as <i>{info.weather}</i> feels like : {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
     </div>
        </div>
    )
}