import {actions, ActionsType} from "./reducer";
import {BaseThuncType} from "./store";
import {Reques} from "../api/api";
import {City} from "./classCity";


type ThuncType = BaseThuncType<ActionsType>;

export const getWeather = (lat: number | null = null, lon: number | null = null, cityName: string | null = null): ThuncType => async (dispatch) => {
    let response;
    let iso;
    //получаем массив с погодными данными (https://openweathermap.org/api)
    if (lat !== null && lon !== null) {
        response = await Reques.getWeatherForCoord(lat, lon);// данные о погоде по текущим координатам пользователя
    } else if (cityName !== null) {
        response = await Reques.getWeatherForCityName(cityName);// данные о погоде по названию города 
    }
    iso = await Reques.getFileCountry();//файл с сокращенным и полным названием страны (по стандарту iso3166)
    if (response.cod === '200' && iso !== undefined) {
        dispatch(actions.initialisation(true));
        let dataWeather = new City();
        dataWeather.cityName = response.city.name;
        dataWeather.setCountry(iso, response.city.country);
        dataWeather.timezone = response.city.timezone;
        dataWeather.coord.lat = response.city.coord.lat;
        dataWeather.coord.lon = response.city.coord.lon;
        for (let i = 0; i < response.list.length; i++) {
            dataWeather.setWeatherList(response.list[i])
        }
        dispatch(actions.setDataWeather(dataWeather));
    } else {
        dispatch(actions.setMessage(response.message))
    }

};

export const setUserLocation = (lat: number, lon: number, timestamp: number): ThuncType => async (dispatch) => {
    let date: Date = new Date(timestamp);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let strDate: string = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `;
    dispatch(actions.setUserLocal(lat, lon, strDate));

};