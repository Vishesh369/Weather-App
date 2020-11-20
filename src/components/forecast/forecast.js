import React, {useState} from 'react';

import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    
    let [city,setCity] = useState('');
    let [unit,setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast(){
        
        //weather data fetch function
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "35c70dea9emsh8beb5d963306d06p15baa0jsn6f8cd78833d7",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})

        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
        })
        .catch(err => {
            console.error(err);
        });
    }
    return(
        
        <div>
            <h2>Find Current Weather Conditions</h2>
        
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength ="50"
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                    />
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                            Fahrenheit
                            
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e)=> setUnit(e.target.value)}
                            />
                            Celcius 
                    </label>
                    <button type="submit"> Get Forecast </button>
                  
            </form>
            <Conditions
                        responseObj={responseObj}
                        />
        </div>
 
    )
}
export default Forecast;