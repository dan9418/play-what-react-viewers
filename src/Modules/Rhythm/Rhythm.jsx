import React from 'react';
import './Rhythm.css';
import PW from 'play-what';
import { AUTUMN_LEAVES_2 } from '../../Utils/AutumnLeaves';

const PitchStack = props => {
    console.log(props.notes);
    return (
        <div className={`beat ${null}`}>
            {props.notes.map((n, i) => (
                <div className='pitch-cell'>
                    {PW.Theory.getNoteName(n)}
                </div>
            ))}
        </div>
    );
};

const Beat = props => {
    const { a, B, i, x, y } = props.pulse;
    const notes = PW.Theory.addVectorsBatch(a, B);
    return (
        <div className={`beat ${i}`}>
            <PitchStack notes={notes} />
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
    if (!beats) {
        return '/'
    }
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
            <div className="title">{name}</div>
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