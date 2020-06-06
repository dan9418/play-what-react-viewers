import React from 'react';
import './Rhythm.css';
import PW from 'play-what';
import { AUTUMN_LEAVES_2 } from '../../Utils/AutumnLeaves';

const Beat = props => {
    const { a, B, i, x, y } = props.pulse;
    return (
        <div className={`beat ${i}`}>
            {PW.Theory.getNoteName(a)}
        </div>
    );
};

const getBeats = beats => {
    const beatComps = [];
    for (let i = 0; i < beats.length; i++) {
        beatComps.push(<Beat {...beats[i]} />);
    }
    return beatComps;
};

const Bar = props => {
    const { beats } = props;
    return (
        <div className={`bar ${props.i}`}>
            {getBeats(beats)}
        </div>
    );
};

const getBars = bars => {
    const barComps = [];
    for (let i = 0; i < bars.length; i++) {
        barComps.push(<Bar {...bars[i]} i={i} />);
    }
    return barComps;
};

const Section = props => {
    const { name, bars } = props;
    return (
        <div className={`section ${props.i}`}>
            {name}
            {getBars(bars)}
        </div>
    );
};

const getSections = sections => {
    const sectionComps = [];
    for (let i = 0; i < sections.length; i++) {
        sectionComps.push(<Section {...sections[i]} i={i} />);
    }
    return sectionComps;
};

const DEFAULT_PROPS = {
    timeSignature: [4, 4],
    quantize: 32,
    bars: 4,
    pulses: []
}

const Rhythm = props => {
    const config = { ...DEFAULT_PROPS, ...props };
    const song = PW.RhythmBeta.parseSong(AUTUMN_LEAVES_2)
    console.log(song);
    return (
        <div className="rhythm">
            {getSections(song.sections)}
        </div>
    );
}

export default Rhythm;