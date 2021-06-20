import React from "react";
import cl from "./startPage.module.css"


type ownPropsType = {
    dataWeather: any
    coordUserLocation: any
    date: any
}


const StartPage: React.FC<ownPropsType> = ({dataWeather, date, coordUserLocation}) => {
    const iconWeather: any = {
        "01d": "day_clear.svg",
        "02d": "day_partial_cloud.svg",
        "03d": "cloudy.svg",
        "04d": "angry_clouds.svg",
        "09d": "rain.svg",
        "10d": "day_rain.svg",
        "11d": "rain_thunder.svg",
        "13d": "snow.svg",
        "50d": "mist.svg",
        "01n": "night_half_moon_clear.svg",
        "02n": "night_half_moon_partial_cloud.svg",
        "03n": "cloudy.svg",
        "04n": "angry_clouds.svg",
        "09n": "rain.svg",
        "10n": "night_half_moon_rain.svg",
        "11n": "rain_thunder.svg",
        "13n": "snow.svg",
        "50n": "mist.svg"
    };

    return (
        <div className={cl.block}>
            <div>
                <span>Currently date</span>
                <p>{date}</p>
            </div>
            <div className={cl.block_info}>
                <div>{dataWeather.weatherList[0].dt_txt}</div>
                <p>{dataWeather.cityName}, {dataWeather.country} </p>
                <p>{dataWeather.weatherList[0].main.temp}℃</p>
                <span>feels  like {dataWeather.weatherList[0].main.feels_like}℃</span>
                <p>wind of {dataWeather.weatherList[0].wind.deg}</p>
                <p>{Math.round(dataWeather.weatherList[0].wind.speed)} m/s</p>
            </div>
            <div className={cl.block_icon}>
                <img src={iconWeather[dataWeather.weatherList[0].weather[0].icon]} alt=""/>
                <p>{dataWeather.weatherList[0].weather[0].description}</p>
            </div>
        </div>
    )
};
export default StartPage;