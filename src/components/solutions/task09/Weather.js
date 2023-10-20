import { useEffect, useState } from "react"

function Weather (){
    const [data, setData] = useState({})
    const [location, setLocation] = useState("Ferizaj")
    const [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=63a17a4e61c5e6dc5aef3890ed2b47f5`)
    const [error, setError] = useState(null)

    

    useEffect(() => {
      const fetchData = async () => {
        if (location === "") return;
        await fetch(url)
          .then((res) =>{
            if(!res.ok){
                throw Error('could not fetch the data for that location')
            }
           return res.json()
        })
          .then((data) => {
            setData(data)
            setError(null)
        })
          .catch((err) => {setError(err.message)
        setData("")});
      };
      fetchData();
      setLocation("")
      
    }, [url]);
    

    const handleChange = (e) =>{
        setLocation(e.target.value)
    }

    return (
      <div className="weather-container">
        <div className="weatherInput-container">
          <h1>{data.name}</h1>
          {error && <div>{error}</div>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUrl(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=63a17a4e61c5e6dc5aef3890ed2b47f5`
              );
            }}
          >
            <input
              className="weather-input"
              type="text"
              value={location}
              onChange={handleChange}
              placeholder="Location"
            />
          </form>
          
          {data.weather ? (
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            />
          ) : null}

          {data.main ? (
            <p className="weather-temp">{`${Math.floor(data.main.temp)} C°`}</p>
          ) : null}
          {data.weather ? (
            <p className="weather-description">{data.weather[0].description}</p>
          ) : null}
        </div>
        <div className="weather-information">
          {data.wind ? (
            <div className="weatherInfo">
              <p>Wind</p>
              <p>{`${Math.floor(data.wind.speed)} km/h`}</p>
            </div>
          ) : null}
          {data.main ? (
            <div className="weatherInfo">
              <p>Humidity</p>
              <p>{`${data.main.humidity} %`}</p>
            </div>
          ) : null}

          {data.main ? (
            <div className="weatherInfo">
              <p>Feels like</p>
              <p>{`${Math.floor(data.main.feels_like)} C°`}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
}

export default Weather