import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import DEFAULT_PROPS from "./Keyboard.defaults";
import { Theory } from 'play-what';

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

// TODO Enforce code reuse
function modulo (a, b) {
    return ((a % b) + b) % b;
}

function callConfigFunction(configFunction, ...args) {
    return ((typeof configFunction).toLowerCase() === 'function') ? configFunction.apply(null, args) : configFunction.fx.apply(null, args);
}

function getKeyboardKeys(config, viewerWidth) {
    let keys = [];
    // Safe approximation for scale
    let numWhiteKeys = (config.keyHigh - config.keyLow + 1) * (7 / 12) + 1;

    let viewerData = {
        minNote: callConfigFunction(config.mapStrategy, config.keyLow, config.keyCenter, config.concept),
        maxNote: callConfigFunction(config.mapStrategy, config.keyHigh, config.keyCenter, config.concept),
        keyLow: config.keyLow,
        keyHigh: config.keyHigh,
        keyData: null
    };

    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(modulo(i, 12)) ? KeyboardKeyType.White : KeyboardKeyType.Black;
        
        viewerData.keyData = { type: type };

        let note = callConfigFunction(config.mapStrategy, i, config.keyCenter, config.concept);
        note = callConfigFunction(config.noteFilter, note, viewerData) ? note : new Theory.NonfunctionalNote(i);

        let styles = callConfigFunction(config.colorFilter, note, viewerData) ? callConfigFunction(config.colorStrategy, note, viewerData) : {};
        let label = callConfigFunction(config.labelFilter, note, viewerData) ? callConfigFunction(config.labelStrategy, note, viewerData) : '';
        let action = callConfigFunction(config.actionFilter, note, viewerData) ? callConfigFunction(config.actionStrategy, note, viewerData) : () => null;
        keys.push(
            <KeyboardKey
                key={i}
                scale={viewerWidth / numWhiteKeys}
                type={type}
                label={label}
                styles={styles}
                action={action}
            />
        );
    }
    return keys;
}

export default class Keyboard extends React.Component {

    constructor(props) {
        super(props);
        this.domNode = null;
        this.state = { height: 0, width: 0 };
        this.domNode = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.resetDimensions);
        this.resetDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resetDimensions);
    }

    resetDimensions() {
        this.setState({ width: this.domNode.current.clientWidth, height: this.domNode.current.clientHeight });
    }

    render() {
        let config = Object.assign({}, DEFAULT_PROPS, this.props);
        
        return (
            <div className='keyboard' ref={this.domNode}>
                {getKeyboardKeys(config, this.state.width)}
            </div>
        );
    }
}