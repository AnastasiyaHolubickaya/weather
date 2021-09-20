import {Weather} from "./classWeather";
import fullNamesCountry from '../iso.json';

export const mapper = (response:any) => {
    let data = new Weather();
    data.setCountry(response.city.country, fullNamesCountry);
    data.cityName = response.city.name;
    data.timezone = response.city.timezone;
    data.coordinates.latitude = response.city.coord.lat;
    data.coordinates.longitude = response.city.coord.lon;
    for (let i = 0; i < response.list.length; i++) {
        data.setWeatherList(response.list[i])
    }
    return data
};

