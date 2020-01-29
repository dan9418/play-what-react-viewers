import * as React from "react";
import "./Fretboard.css";
import DEFAULT_PROPS from "./FretLabel.defaults";
import PlayWhat from 'play-what';

export default function FretLabel(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);
    return (
        <div className='fret-label'>
            Test
        </div>
    );
}