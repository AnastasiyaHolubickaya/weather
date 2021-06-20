class ServerRequest {
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
            .catch((error) => {
                console.error(error);
            })
    }

    getWeatherForCoord(lat: number, lon: number) {
        return fetch(`${this.baseURL}lat=${lat}&lon=${lon}&appid=${this.api_key}`)
            .then(data => data.json())
            .then(data => {
                return data;
            })
            .catch((error) => {
                console.error(error);
            })
    }

    getFileCountry() {
        return fetch("iso.json")
            .then(data => data.json())
            .then(data => {
                return data;
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export const Reques = ServerRequest.getInstance();
