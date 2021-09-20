import React from "react";
import cl from "./header.module.css"
import {Search} from "../searchComponent/Search";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {CustomizedButtons} from "../button/Button";
import {SplitButton} from "../button/SplitButton";


interface IMyComponentState {
    handleOnClick: any
    getWeather: any
    setLanguage: (lang: string) => void
    setUnitTemp: (cels: boolean) => void
}


export const Header: React.FC<IMyComponentState> = ({handleOnClick, getWeather, setLanguage, setUnitTemp}) => {

    const handleChangeUnitTmp = (cels: boolean) => {
        setUnitTemp(cels)
    };

    return (
        <header className={cl.header}>
            <div>

                <ButtonGroup className={cl.btn_style} size="small">
                    <SplitButton
                        setLanguage={setLanguage}
                    />
                    <CustomizedButtons
                        handleOnClick={handleOnClick}
                        value={"☀"}
                    />

                    <CustomizedButtons
                        handleOnClick={() => handleChangeUnitTmp(false)}
                        value={"°F"}
                    />
                    <CustomizedButtons
                        handleOnClick={() => handleChangeUnitTmp(true)}
                        value={"°C"}
                    />
                </ButtonGroup>
            </div>
            <Search
                getWeather={getWeather}
            />
        </header>
    )
};