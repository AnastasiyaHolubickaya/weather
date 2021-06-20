import React from "react";
import classes from './Preloader.module.css';


const Preloader = () => {
    return (
        <div className={classes.block}>
            <img src="globe-9.gif" alt="preloader"/>
        </div>
    )
};
export default Preloader;