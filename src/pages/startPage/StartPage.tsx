import React from "react";
import cl from "./startPage.module.css"
import i18next from 'i18next';
import Card from '@material-ui/core/Card';
import {YMaps, Map} from 'react-yandex-maps';
import {CardDay} from "../../components/CardDay/CardDay";
import {filter} from "../../utils/filter";
import {CardCurrentWeather} from "../../components/cardCurrentWeather/CardCurrentWeather";

interface IMyComponentProps {
    dataWeather: any
    date: { en: string, ru: string }
    lang: string
    celsius: boolean
}


const StartPage: React.FC<IMyComponentProps> = ({dataWeather, date, lang, celsius}) => {

    const {latitude = 0, longitude = 0} = {...dataWeather.coordinates};
    let mass:Array<object> = filter(dataWeather.weatherList);

    return (
        <div className={cl.container}>
            <div className={cl.title}>
                <p>{dataWeather.cityName},
                    {
                        lang === 'ru' ? dataWeather.countryRu : dataWeather.country
                    }
                </p>
            </div>
            <div className={cl.block}>
                <CardCurrentWeather
                    dataWeather={dataWeather}
                    date={date}
                    lang={lang}
                    celsius={celsius}
                />
                <Card className={cl.card}>
                    <div className={cl.flex}>
                        <YMaps>
                            <div>
                                <Map
                                    state={{center: [latitude, longitude], zoom: 9,}}
                                />
                            </div>
                        </YMaps>
                        <div className={cl.coords}>
                            <p>{i18next.t('latitude')}: {latitude}</p>
                            <p>{i18next.t('longitude')}: {longitude}</p>
                        </div>
                    </div>
                </Card>
                <div className={cl.block_cards}>
                    {
                        mass.map((list: any, index: number) =>
                            <CardDay
                                weatherList={list}
                                key={index.toString()}
                                celsius={celsius}
                                lang={lang}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
};
export default StartPage;