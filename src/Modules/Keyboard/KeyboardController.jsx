import * as React from "react";
import "./Keyboard.css";
import DEFAULT_PROPS from "./Keyboard.defaults";
import Keyboard from "./Keyboard";
import ControllerHeader from '../../UI/ControllerHeader/ControllerHeader';

const KeyboardController = (props) => {

    const state = {};

    return (
        <div className='keyboard-controller'>
            <ControllerHeader title='Keyboard'>
                Inputs coming soon...
            </ControllerHeader>
            <Keyboard {...props} />
        </div>
    );
};

export default KeyboardController;