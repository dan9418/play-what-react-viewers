import React from 'react';
import './Rhythm.css';
import PW from 'play-what';

const WHITE_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11];

const getPitchCells = notes => {
    const pitchCells = [];
    for (let i = 0; i < 12; i++) {
        const note = notes.find(n => n.p === i);
        const name = note ? PW.Theory.getNoteName(note) : null;
        pitchCells.push(
            <div className={`pitch-cell ${WHITE_KEY_INDICES.includes(i) ? 'white' : 'black'}`}>
                {name}
            </div>
        );
    }
    return pitchCells;
}

const Beat = props => {
    const { a, B, i, x, y } = props.pulse;
    const notes = PW.Theory.addVectorsBatch(a, B);
    return (
        <div className={`beat ${i}`}>
            {getPitchCells(notes)}
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
    const song = PW.RhythmBeta.parseSong(AUTUMN_LEAVES)
    console.log(song);
    return (
        <div className="rhythm">
            {getSections(song.sections)}
        </div>
    );
}

export default Rhythm;