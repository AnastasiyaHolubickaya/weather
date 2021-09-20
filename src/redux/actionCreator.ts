import {BaseThuncType, InferActionType} from "./store";
import {ServerRequest} from "../api/api";
import {mapper} from "./mapper";
import {getDate} from "../utils/getDate";

export type ActionsType = InferActionType<typeof actions>;
type ThuncType = BaseThuncType<ActionsType>;

export const actions = {
    changeLanguage: (lang: string) => ({type: "SET_LANG", lang} as const),
    changeUnitTemp: (cels: boolean) => ({type: "SET_UNIT_TEMP", cels} as const),
    setDataWeather: (data: any) => ({type: "SET_DATA_WEATHER", data} as const),
    setMessage: (mess: string) => ({type: "SET_MESSAGE", mess} as const),
    setUserLocal: (lat: number, lon: number,date:{en:string, ru:string}) => ({
        type: "SET_USER_LOCATION",
        coord: {lat, lon},
        date: date
    } as const),
    initialisation: (init: boolean) => ({type: "SET_INITIALISATION", init} as const),
};


export const getWeather = (latitude: number | null = null, longitude: number | null = null, cityName: string | null = null): ThuncType => async (dispatch) => {
    let response;
    //получаем массив с погодными данными (https://openweathermap.org/api)
    if (latitude !== null && longitude !== null) {
        response = await ServerRequest.getInstance().getWeatherForCoord(latitude, longitude);// данные о погоде по текущим координатам пользователя

    } else if (cityName !== null) {
        response = await ServerRequest.getInstance().getWeatherForCityName(cityName);// данные о погоде по названию города

    }
    if (response.cod === '200') {
        dispatch(actions.initialisation(true));
        dispatch(actions.setDataWeather(mapper(response)));
    } else {
        dispatch(actions.setMessage(response.message))
    }

};

export const setUserLocation = (lat: number, lon: number, timestamp: number): ThuncType => async (dispatch) => {
    //console.log(getDate(timestamp))
    dispatch(actions.setUserLocal(lat, lon, getDate(timestamp)));
};

export const setLang = (lang:string): ThuncType => async (dispatch) => {
    dispatch(actions.changeLanguage(lang));
};
export const setUnitTemp = (cels:boolean): ThuncType => async (dispatch) => {
    dispatch(actions.changeUnitTemp(cels));
};