import React from "react";
import classes from './Preloader.module.css';


const Preloader = () => {
    return (
        <div className={classes.block}>
           идет загрузка данных...
        </div>
    )
};
export default Preloader;