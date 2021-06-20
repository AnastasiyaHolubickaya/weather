import React, {Component} from 'react';
import './style.css';
import Header from "./components/header/Header";
//import {StartPage} from "./pages/startPage/StartPage";
import {Route} from "react-router";
import loadable from 'react-loadable';
import {DetailPage} from "./pages/detailPage/DetailPage";
import {AppStateType} from "./redux/store";
import {connect} from "react-redux";
import {getWeather, setUserLocation} from "./redux/ThunksCreator";
import Preloader from "./components/Preloader/Preloader";
import {Page404} from "./pages/404Page/Page404";
import {Switch} from 'react-router-dom';


type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchPropsType = {
    getWeather: (lat?: number | null, lon?: number | null, name?: string | null,) => void
    setUserLocation: (lat: number, lon: number, timestamp: number) => void
}

const AsyncPages = {
    StartPage: loadable({
        loader: () => import('./pages/startPage/StartPage'),
        loading: Preloader
    })
};

class App extends Component<mapDispatchPropsType & mapStatePropsType> {

    componentDidMount(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.props.setUserLocation(position.coords.latitude, position.coords.longitude, position.timestamp);
            })
        }
    }

    componentDidUpdate(prevProps: Readonly<mapDispatchPropsType & mapStatePropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.coordUserLocation.lat !== prevProps.coordUserLocation.lat && this.props.coordUserLocation.lon !== prevProps.coordUserLocation.lon)
            this.props.getWeather(this.props.coordUserLocation.lat, this.props.coordUserLocation.lon, null);
    }

    render() {
        if (!this.props.initialization) {
            return <Preloader/>
        }
        return (
            <div className="app">
                <Header/>
                <Switch>
                    <Route exact path='/' render={() =>
                        <AsyncPages.StartPage
                            dataWeather={this.props.dataWeather}
                            coordUserLocation={this.props.coordUserLocation}
                            date={this.props.date}
                        />}/>
                    <Route exact path='/detail' render={() => <DetailPage/>}/>
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
    initialization: state.app.inicialization
});

export default connect(mapStateToProps, {setUserLocation, getWeather})
(App);
