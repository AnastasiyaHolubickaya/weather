import React from "react";
import {Link} from "react-router-dom";



export const Page404 = () =>{

    return(
        <div>
            <p>
                This is not the page that you are looking for!
                <Link to='/'>Go Home</Link>
            </p>
        </div>
    )
};