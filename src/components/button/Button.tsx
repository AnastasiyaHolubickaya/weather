import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        color: "#000000",
        padding: '3px 5px',
        margin: "10px",
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: 'rgba(255,255,255,.5)',
        borderColor: "#000000",

        '&:hover': {
            backgroundColor: '#8CBFEF',
            borderColor: '#8CBFEF',
            boxShadow: 'none',
            color: "#ffffff"
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#8CBFEF',
            borderColor: '#8CBFEF',
        },
    },
})(Button);


interface IMyComponentState {
    handleOnClick?: () => void
    value?: string
}

export const CustomizedButtons: React.FC<IMyComponentState> = ({handleOnClick, value}) => {

    return (
        <div>
            <BootstrapButton onClick={handleOnClick} variant="contained" color="primary" disableRipple>{value}
            </BootstrapButton>
        </div>
    );
};