import React from "react";
import {Link} from "react-router-dom";



export const ErrorGeolocation = () =>{
    return(
        <div>
            <p>
                Разрешите приложению использовать данные о вашем местоположении.
            </p>
            <p>Allow the app to use your location data.</p>
            <p><Link to='https://support.google.com/accounts/answer/6179507?hl=ru'>Как настроить доступ приложений к геоданным телефона Android</Link></p>
            <p><Link to='https://support.apple.com/ru-ru/HT207092'>Включение и отключение служб геолокации и GPS на iPhone, iPad или iPod touch</Link></p>
        </div>
    )
};