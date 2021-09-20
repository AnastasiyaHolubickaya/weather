import {ActionsType} from "./actionCreator";


let initialState = {
    celsius: true,
    languageApp: "en",
    dataWeather: {
        coordinates: {latitude: 0, longitude: 0},
        country: '',
        countryRu: '',
        cityName: '',
        timezone: 0,
        sunrise: '',
        sunset: '',
        weatherList: [],
    },
    messageError: '',
    coordUserLocation: {
        lat: 0,
        lon: 0
    },
    currentData: {
        en: '',
        ru: ''
    },
    inicialization: false,
    bgImgs: ["P1018313.jpg", "P1019640.jpg", "P1019641.jpg", "IMGP3552.JPG", "IMGP3539.JPG"]
};
export type initialStateType = typeof initialState;


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
        case "SET_LANG":
            return {
                ...state,
                languageApp: action.lang
            };
        case "SET_UNIT_TEMP":
            return {
                ...state,
                celsius: action.cels
            };
        default:
            return state;
    }
};

export default reducer;

