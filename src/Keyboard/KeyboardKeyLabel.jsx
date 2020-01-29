import * as React from "react";
import "./Keyboard.css";
import DEFAULT_PROPS from "./KeyboardKeyLabel.defaults";
import PlayWhat from 'play-what';

// Temp
function callConfigFunction(configFunction, ...args) {
    return ((typeof configFunction).toLowerCase() === 'function') ? configFunction.apply(null, args) : configFunction.fx.apply(null, args);
}

export default function KeyboardKeyLabel(props) {
    let config = Object.assign({}, DEFAULT_PROPS, props);

    let note = callConfigFunction(config.mapStrategy, config.noteIndex, config.keyCenter, config.concept);
    note = note ? note : new Theory.NonfunctionalNote(config.noteIndex);

    let styles = callConfigFunction(config.colorStrategy, note);
    let label = callConfigFunction(config.labelStrategy, note);
    let action = callConfigFunction(config.actionStrategy, note);

    return (
        <div className='keyboard-key-label' style={styles} onClick={action}>
            {label}
        </div>
    );
}