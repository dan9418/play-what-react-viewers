import * as React from "react";
import "./Fretboard.css";
import { Fret } from "./Fret";
import Fretboard from './Fretboard';
import DEFAULT_PROPS from "./Fretboard.defaults";
import PlayWhat from 'play-what';

export default function FretboardController(props) {
    
    return (
        <div className='fretboard-controller'>
            <Fretboard/>
        </div>
    );
}