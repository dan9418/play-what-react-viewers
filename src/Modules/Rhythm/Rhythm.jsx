import React from 'react';
import './Rhythm.css';
import PW from 'play-what';

const Beat = config => {
    const { timeSignature, quantize, bars, pulses } = config;
    return (
        <div className={`beat ${config.i}`}>
            {config.i}
        </div>
    );
};

const getBeats = config => {
    const { timeSignature, quantize, bars, pulses } = config;
    const beats = [];
    for (let i = 0; i < quantize; i++) {
        beats.push(<Beat i={i} />);
    }
    return beats;
};

const Bar = config => {
    const { timeSignature, quantize, bars, pulses } = config;
    return (
        <div className={`bar ${config.i}`}>
            {getBeats(config)}
        </div>
    );
};

const getBars = config => {
    const { timeSignature, quantize, bars, pulses } = config;
    const barComps = [];
    for (let i = 0; i < bars; i++) {
        barComps.push(<Bar {...config} i={i}/>);
    }
    return barComps;
};

const DEFAULT_PROPS = {
    timeSignature: [4, 4],
    quantize: 32,
    bars: 4,
    pulses: []
}

const Rhythm = props => {
    const config = { ...DEFAULT_PROPS, ...props };
    return (
        <div className="rhythm">
            {getBars(config)}
        </div>
    );
}

export default Rhythm;