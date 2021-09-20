import React from "react";
import cl from "./cardDay.module.css"
import Card from '@material-ui/core/Card';
import {getNameDays} from "../../utils/getDate";
import {converterTemperature} from "../../utils/converterTemperature";

type propsType = {
    weatherList?: any
    lang?: string
    celsius: boolean
}


export const CardDay: React.FC<propsType> = ({weatherList, lang, celsius}) => {
    let weekDays = getNameDays(weatherList.dt);
    return (
        <Card className={cl.card}>
            <p className={cl.date}>
                {
                    lang === 'ru' ? weekDays.ru : weekDays.en
                }
            </p>
            <div className={cl.temp}>
                <div className={cl.img}>
                    <img src={`weather/iconsWeather/${weatherList.weather[0].icon}`}
                         alt={weatherList.weather[0].main}
                         title={weatherList.weather[0].main}
                    />
                </div>
                <span>{
                    celsius
                        ? `${weatherList.main.temp}℃`
                        : `${converterTemperature(weatherList.main.temp)}°F`}</span>
            </div>
        </Card>
    )
};