import React from "react";
import cl from "../../pages/startPage/startPage.module.css";
import i18next from "i18next";
import {converterTemperature} from "../../utils/converterTemperature";
import Card from "@material-ui/core/Card/Card";


interface IMyComponentProps {
    dataWeather: any
    date: { en: string, ru: string }
    lang: string
    celsius: boolean
}

export const CardCurrentWeather: React.FC<IMyComponentProps> = ({dataWeather, date, lang, celsius}) =>{
    return(
        <Card className={cl.card}>
            <div>
                <span className={cl.span}>{i18next.t('currently_date')}</span>
                <p className={cl.date}>
                    {
                        lang === 'ru' ? date.ru : date.en
                    }
                </p>
            </div>
            <div className={cl.block_temp}>
                <div className={cl.img}>
                    <img src={`weather/iconsWeather/${dataWeather.weatherList[0].weather[0].icon}`}
                         alt={dataWeather.weatherList[0].weather[0].main}
                         title={dataWeather.weatherList[0].weather[0].main}
                    />
                </div>
                <div>
                    <p>
                        {
                            celsius ? `${dataWeather.weatherList[0].main.temp}℃` : `${converterTemperature(dataWeather.weatherList[0].main.temp)}°F`
                        }
                    </p>
                </div>
                <div>
                    <p>{dataWeather.weatherList[0].weather[0].description}</p>
                    <span>{i18next.t('feels')}</span>
                    <span>
                               {
                                   celsius ? `${dataWeather.weatherList[0].main.feels_like}℃` : `${converterTemperature(dataWeather.weatherList[0].main.feels_like)}°F`
                               }
                           </span>
                </div>
            </div>
            <div className={cl.block_info}>
                <div className={cl.wind}>
                    <p className={cl.font_style}>{i18next.t('wind')}</p>
                    <p>   {
                        lang === 'ru' ? dataWeather.weatherList[0].wind.deg.ru : dataWeather.weatherList[0].wind.deg.en
                    }
                    </p>
                    <p>{Math.round(dataWeather.weatherList[0].wind.speed)} {i18next.t('ms')}</p>
                </div>
                <div className={cl.humidity}>
                    <p className={cl.font_style}>{i18next.t('humidity')} </p>
                    <p>{dataWeather.weatherList[0].main.humidity}%</p>
                </div>
                <div className={cl.visibility}>
                    <p className={cl.font_style}>{i18next.t('visibility')} </p>
                    <p>{dataWeather.weatherList[0].visibility} {i18next.t('km')}</p>
                </div>
                <div className={cl.pressure}>
                    <p className={cl.font_style}>{i18next.t('pressure')} </p>
                    <p>{dataWeather.weatherList[0].main.pressure} {i18next.t('mmHg')}</p>
                </div>
            </div>
            <div className={cl.block_icon}>
            </div>
        </Card>
    )
};