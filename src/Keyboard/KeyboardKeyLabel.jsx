import * as React from "react";
import "./Keyboard";
import DEFAULT_PROPS from "./KeyboardKeyLabel.defaults";
import PlayWhat from 'play-what';

export default function KeyboardKeyLabel(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);
    return (
        <div className='keyboard-key-label'>
            Test
        </div>
    );
}