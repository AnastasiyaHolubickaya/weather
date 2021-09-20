export class ServerRequest {
    private baseURL = "https://api.openweathermap.org/data/2.5/forecast?";
    private api_key = "6f4d4317a3c560906fa4cb8674063b92";
    private static instance: ServerRequest;

    private constructor() {
    };

    static getInstance(): ServerRequest {
        if (typeof ServerRequest.instance === 'object') {
            return ServerRequest.instance;
        }
        ServerRequest.instance = new ServerRequest();
        return ServerRequest.instance;
    }

    getWeatherForCityName(cityName: string) {
        return fetch(`${this.baseURL}q=${cityName}&appid=${this.api_key}`)
            .then(data => data.json())
            .then(data => {
                return data;
            })
    }

    getWeatherForCoord(latitude:number, lonlongitude:number) {
        return fetch(`${this.baseURL}lat=${latitude}&lon=${lonlongitude}&appid=${this.api_key}`)
            .then(data => data.json())
            .then(data => {
                return data;
            })
    }
}

