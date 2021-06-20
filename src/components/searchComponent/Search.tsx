import React from "react";
import cl from "./search.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Button from "../button/Button";
import {Input} from "./FormControls";


type ownPropsType = {}
type formDataType = {
    text: string
}
type validatorType = (value: string) => string | undefined


const validateSumbol = (): validatorType => (value) => {
    if (value !== undefined) {
        let regex = new RegExp(/^[a-zа-яё]+$/i);
        if (!regex.test(value)) return (`разрешен ввод только букв латинского алфавита и кирилицы`);
    }
    return undefined;
};
const validate = validateSumbol();

const formSubmit: React.FC<InjectedFormProps<formDataType> & ownPropsType> = ({handleSubmit, error,}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className={cl.form}>
                <Field name={"text"} className={cl.input}
                       component={Input}
                       autoFocus
                       type="text"
                       placeholder={'enter city'}
                       validate={[validate]}/>
                {
                    !error && <div>{error}</div>
                }
                <Button value="search"/>
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


