import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import DEFAULT_PROPS from "./Keyboard.defaults";
import PlayWhat from 'play-what';

const BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

// TODO Enforce code reuse
const modulo = (a, b) => {
    return ((a % b) + b) % b;
}

const getKeyboardKeys = (config, viewerWidth) => {
    let keys = [];
    // Safe approximation for scale
    let numWhiteKeys = (config.keyHigh - config.keyLow + 1) * (7 / 12) + 1;

    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(modulo(i, 12)) ? KeyboardKeyType.White : KeyboardKeyType.Black;
        
        keys.push(
            <KeyboardKey
                key={i}
                notes={config.notes}
                noteIndex={i}
                minIndex={config.keyLow}
                maxIndex={config.keyHigh}
                scale={viewerWidth / numWhiteKeys}
                type={type}
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