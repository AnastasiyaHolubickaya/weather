import React, {Component} from "react";
import cl from "./header.module.css"
import {Search} from "../searchComponent/Search";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {getWeather} from "../../redux/ThunksCreator";

interface IMyComponentState {

}

type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchPropsType = {
    getWeather: any
}
type ownPropsType = mapDispatchPropsType & mapStatePropsType


class Header extends Component<ownPropsType, IMyComponentState> {


    render() {
        return (
            <header className={cl.header}>

                <Search
                    getWeather={this.props.getWeather}
                />
            </header>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({});

export default connect(mapStateToProps, {getWeather})(Header);