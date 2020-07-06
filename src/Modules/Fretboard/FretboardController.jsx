import * as React from "react";
import "./Fretboard.css";
import DEFAULT_PROPS from "./Fretboard.defaults";
import Fretboard from "./Fretboard";
import ControllerHeader from '../../UI/ControllerHeader/ControllerHeader';

const FretboardController = (props) => {

    const state = {};

    return (
        <div className='fretboard-controller'>
            <ControllerHeader title='Fretboard'>
                Hello Wolrd
            </ControllerHeader>
            <Fretboard {...state} />
        </div>
    );
};

export default FretboardController;