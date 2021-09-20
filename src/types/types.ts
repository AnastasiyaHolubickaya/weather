export type listType = {
    clouds: {}
    dt_txt: string
    dt: number
    visibility: number
    sys:{}
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    weather: [{
        description: string
        icon: string
        id: number
        main: string
    }]
    wind: {
        deg: number
        gust: number
        speed: number
    }
}