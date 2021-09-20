import React from "react";
import cl from "./search.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "./FormControls";
import i18next from "i18next";
import {CustomizedButtons} from "../button/Button";



type ownPropsType = {}
type formDataType = {
    text: string
}

const formSubmit: React.FC<InjectedFormProps<formDataType> & ownPropsType> = ({handleSubmit, error,}) => {

    return (
        <div>
            <form onSubmit={handleSubmit} className={cl.form}>
                <Field name={"text"} className={cl.input}
                       component={Input}
                       autoFocus
                       type="text"
                       placeholder={i18next.t('placeholder')}
                      />
                {
                    !error && <div>{error}</div>
                }
                <CustomizedButtons
                    value={i18next.t('btn_search')}
                    // @ts-ignore
                    handleOnClick={handleSubmit}
                > </CustomizedButtons>
            </form>
        </div>
    )
};
const SettingPageForm = reduxForm<formDataType, ownPropsType>({
    form: 'search'
})(formSubmit);

interface IComponentType {
    getWeather: any
}

export const Search: React.FC<IComponentType> = ({getWeather}) => {

    const onSubmit = (formData: formDataType) => {
        getWeather(null, null, formData.text);
    };

    return (
        <SettingPageForm onSubmit={onSubmit}/>
    )
};


