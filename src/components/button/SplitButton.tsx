import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {CustomizedButtons} from "./Button";


interface IMyComponentState {
    setLanguage: (n: string) => void
}

export const SplitButton: React.FC<IMyComponentState> = ({setLanguage}) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState('en');

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        id: string
    ) => {
        setSelectedIndex(id);
        setLanguage(id);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                < CustomizedButtons
                    value={`${selectedIndex} ▾`}
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    handleOnClick={handleToggle}
                >
                </CustomizedButtons>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    <MenuItem
                                        selected={"en" === selectedIndex}
                                        id={"en"}
                                        onClick={(event) => handleMenuItemClick(event, "en")}
                                        value={"en"}

                                    >
                                        en
                                    </MenuItem>
                                    <MenuItem
                                        selected={"ru" === selectedIndex}
                                        id={"ru"}
                                        onClick={(event) => handleMenuItemClick(event, "ru")}
                                        value={"ru"}

                                    >
                                        ru
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};