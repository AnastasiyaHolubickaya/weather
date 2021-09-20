import React, {Component} from 'react';
import './style.css';
import {Header} from "./components/header/Header";
import {Route} from "react-router";
import loadable from 'react-loadable';
import {AppStateType} from "./redux/store";
import {connect} from "react-redux";
import {getWeather, setUserLocation, setLang, setUnitTemp} from "./redux/actionCreator";
import Preloader from "./components/Preloader/Preloader";
import {Page404} from "./pages/404Page/Page404";
import {Switch} from 'react-router-dom';
import i18next from "i18next";
import {ErrorGeolocation} from "./components/errorGeolocation/ErrorGeolocation";


interface IMyComponentState {
}

type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchPropsType = {
    getWeather: (lat?: number | null, lon?: number | null, name?: string | null,) => void
    setUserLocation: (lat: number, lon: number, timestamp: number) => void
    setLang: any
    setUnitTemp: (cels: boolean) => void
}

const AsyncPages = {
    StartPage: loadable({
        loader: () => import('./pages/startPage/StartPage'),
        loading: Preloader
    })
};

class App extends Component<mapDispatchPropsType & mapStatePropsType, IMyComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    setLanguage = (language: string) => {
        i18next.init({
            lng: language,
            resources: require(`./${language}.json`)
        });
        this.props.setLang(language)
    };


    componentDidMount(): void {
        this.setLanguage(this.props.lang);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.props.setUserLocation(position.coords.latitude, position.coords.longitude, position.timestamp);
            })
        } else {
            <ErrorGeolocation/>
        }
    }

    componentDidUpdate(prevProps: Readonly<mapDispatchPropsType & mapStatePropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.coordUserLocation.lat !== prevProps.coordUserLocation.lat && this.props.coordUserLocation.lon !== prevProps.coordUserLocation.lon)
            this.props.getWeather(this.props.coordUserLocation.lat, this.props.coordUserLocation.lon, null);
    }

    handleOnClickChangeBg = () => {
        let element = document.querySelector('.app');
        element !== null && element.setAttribute("style", `background-image: url("weather/bgImg/${this.props.bgImgs[Math.floor(Math.random() * this.props.bgImgs.length)]}")`);
    };
    handleOnSelect = (lang: string) => {
        this.setLanguage(lang)
    };


    render() {
        if (navigator.geolocation && !this.props.initialization) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <Header handleOnClick={this.handleOnClickChangeBg}
                        getWeather={this.props.getWeather}
                        setLanguage={this.handleOnSelect}
                        setUnitTemp={this.props.setUnitTemp}
                />
                <Switch>
                    <Route exact path='/' render={() =>
                        <AsyncPages.StartPage
                            dataWeather={this.props.dataWeather}
                            date={this.props.date}
                            lang={this.props.lang}
                            celsius={this.props.celsius}
                        />}/>
                    <Route path={'*'} render={() => <Page404/>}/>
                </Switch>

            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    coordUserLocation: state.app.coordUserLocation,
    dataWeather: state.app.dataWeather,
    date: state.app.currentData,
    initialization: state.app.inicialization,
    bgImgs: state.app.bgImgs,
    lang: state.app.languageApp,
    celsius: state.app.celsius
});

export default connect(mapStateToProps, {
    setUserLocation, getWeather, setLang, setUnitTemp
})
(App);
