import directionsWind from '../windDirection.json';
import iconsUrl from '../iconsUrl.json';
import {converterTemperature} from "../utils/converterTemperature";
import {listType} from "../types/types";


export class Weather {
    public cityName = "";
    public coordinates = {
        latitude: 0,
        longitude: 0
    };
    public timezone = 0;
    public country = "";
    public countryRu = "";
    public sunrise = '';
    public sunset = '';
    public weatherList: any = [];


    getWindDirection(deg: number) {
        let o = {};
        if (directionsWind) {
            for (const [key, value] of Object.entries(directionsWind)) {
                if (deg > value.start && deg <= value.end) {
                    o = {en: key, ru: value.ru}
                }
            }
            return o
        }
    }

    getUrlIcon(icon: string) {
        let url = "";
        for (const [key, value] of Object.entries(iconsUrl)) {
            if (icon === key) {
                url = value;
            }
        }
        return url;
    }

// fullNamesCountry - json объект с полным и сокращенным зазванием стран по стандарту iso3166
    setCountry(abr: string, fullNamesCountry: any) {
        for (let i = 0; i < fullNamesCountry.length; i++) {
            if (abr === fullNamesCountry[i].alpha2) {
                this.country = fullNamesCountry[i].english;
                this.countryRu = fullNamesCountry[i].name
            }
        }
    }

//list - массив с температурными данными (температура в кельвинах, давление, влажность, видимость, направление ветра в градусах ...)
    setWeatherList(list: listType) {
        const ONE_hPa = 0.75;
        this.weatherList.push({
            clouds: list.clouds,
            dt: list.dt,
            dt_txt: list.dt_txt,
            sys: list.sys,
            visibility: list.visibility / 1000,
            main: {
                feels_like: converterTemperature(list.main.feels_like, true),
                humidity: list.main.humidity,
                pressure: Math.round(list.main.pressure * ONE_hPa),
                temp: converterTemperature(list.main.temp, true),
                temp_max: converterTemperature(list.main.temp_max, true),
                temp_min: converterTemperature(list.main.temp_min, true)
            },
            weather: [{
                description: list.weather[0].description,
                icon: this.getUrlIcon(list.weather[0].icon),
                id: list.weather[0].id,
                main: list.weather[0].main
            }],
            wind: {
                deg: this.getWindDirection(list.wind.deg),
                gust: list.wind.gust,
                speed: list.wind.speed
            }
        })
    }
}








