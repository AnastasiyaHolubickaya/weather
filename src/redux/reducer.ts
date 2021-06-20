import {InferActionType} from "./store";


let initialState = {
    dataWeather: {
        coord: {lat: 0, lon: 0},
        country: '',
        cityName: '',
        timezone: 0,
        weatherList: [{
            clouds: {},
            dt_txt: '',
            visibility: 0,
            main: {
                feels_like: 0,
                humidity: 0,
                pressure: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0
            },
            weather: [{
                description: '',
                icon: '',
                id: 0,
                main: ''
            }],
            wind: {
                deg: 0,
                gust: 0,
                speed: 0
            }
        }]
    },
    messageError: '',
    coordUserLocation: {
        lat: 0,
        lon: 0
    },
    currentData: '',
    inicialization: false
};
export type initialStateType = typeof initialState;
export type ActionsType = InferActionType<typeof actions>;


const reducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_DATA_WEATHER":
            return {
                ...state,
                dataWeather: action.data
            };
        case "SET_MESSAGE":
            return {
                ...state,
                messageError: action.mess
            };

        case "SET_USER_LOCATION":
            return {
                ...state,
                coordUserLocation: action.coord,
                currentData: action.date,
            };
        case "SET_INITIALISATION":
            return {
                ...state,
                inicialization: true
            };
        default:
            return state;
    }
};
//(0 °C × 9/5) + 32
export const actions = {
    setDataWeather: (data: any) => ({type: "SET_DATA_WEATHER", data} as const),
    setMessage: (mess: string) => ({type: "SET_MESSAGE", mess} as const),
    setUserLocal: (lat: number, lon: number, date: string) => ({
        type: "SET_USER_LOCATION",
        coord: {lat, lon},
        date
    } as const),
    initialisation: (init: boolean) => ({type: "SET_INITIALISATION", init} as const),
};

export default reducer;

