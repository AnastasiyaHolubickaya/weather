export class City {
    public cityName = "";
    public coord = {
        lat: 0,
        lon: 0
    };
    public timezone = 0;
    protected country = "";

    protected weatherList: any = [];

// определяет направление ветра  по градусам
    getWindDirection(deg: number) {
        let windDirection = '';
        const DEG11 = 11.25, DEG33 = 33.75, DEG56 = 56.25, DEG78 = 78.25, DEG101 = 101.25,
            DEG123 = 123.75, DEG146 = 146.25, DEG168 = 168.75, DEG191 = 191.25, DEG213 = 213.75,
            DEG236 = 236.25, DEG258 = 258.75, DEG281 = 281.25, DEG303 = 303.75, DEG326 = 326.25, DEG348 = 348.75;
        if (deg >= DEG348 && deg < DEG11) {
            windDirection = "north"
        } else if (deg >= DEG11 && deg < DEG33) {
            windDirection = "north north-east"
        } else if (deg >= DEG33 && deg < DEG56) {
            windDirection = "north-east"
        } else if (deg >= DEG56 && deg < DEG78) {
            windDirection = "east north-east"
        } else if (deg >= DEG78 && deg < DEG101) {
            windDirection = "east"
        } else if (deg >= DEG101 && deg < DEG123) {
            windDirection = "east south-east"
        } else if (deg >= DEG123 && deg < DEG146) {
            windDirection = "south-east"
        } else if (deg >= DEG146 && deg < DEG168) {
            windDirection = "south south-east"
        } else if (deg >= DEG168 && deg < DEG191) {
            windDirection = "south"
        } else if (deg >= DEG191 && deg < DEG213) {
            windDirection = "south south-west"
        } else if (deg >= DEG213 && deg < DEG236) {
            windDirection = "south-west"
        } else if (deg >= DEG236 && deg < DEG258) {
            windDirection = "west south-west"
        } else if (deg >= DEG258 && deg < DEG281) {
            windDirection = "west"
        } else if (deg >= DEG281 && deg < DEG303) {
            windDirection = "west north-west"
        } else if (deg >= DEG303 && deg < DEG326) {
            windDirection = "north-west"
        } else if (deg >= DEG326 && deg < DEG348) {
            windDirection = "north north-west"
        }
        return windDirection;
    }

// data - json объект с полным и сокращенным зазванием стран по стандарту iso3166
    setCountry(data: any, abr: string) {
        for (let i = 0; i < data.length; i++) {
            if (abr === data[i].alpha2) {
                this.country = data[i].english
            }
        }

    }

    getCountry() {
        return this.country
    }

//list - массив с температурными данными (температура в кельвинах, давление, влажность, видимость, направление ветра в градусах ...)
    setWeatherList(list: listType) {
        const ABSOLUT_ZERO = -273.15;
        const ONE_hPa = 0.75;
        this.weatherList.push({
            clouds: list.clouds,
            dt_txt: list.dt_txt,
            visibility: list.visibility / 1000,
            main: {
                feels_like: Math.round(list.main.feels_like - (-ABSOLUT_ZERO)),
                humidity: list.main.humidity,
                pressure: Math.round(list.main.pressure * ONE_hPa),
                temp: Math.round(list.main.temp - (-ABSOLUT_ZERO)),
                temp_max: Math.round(list.main.temp_max - (-ABSOLUT_ZERO)),
                temp_min: Math.round(list.main.temp_min - (-ABSOLUT_ZERO))
            },
            weather: [{
                description: list.weather[0].description,
                icon: list.weather[0].icon,
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

type listType = {
    clouds: {}
    dt_txt: string
    visibility: number
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






