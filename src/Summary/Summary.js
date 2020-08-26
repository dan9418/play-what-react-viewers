import * as React from "react";
import PW from 'play-what';
import "./Summary.css";

const DEFAULT_PROPS = {
    colorFn: PW.api.PW.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Note = ({ note, colorFn }) => {
    const noteIndex = note.p;
    const name = PW.api.PW.Vector.Note.getName({ pod: note });
    const interval = PW.api.PW.Vector.Interval.getName({ pod: note });
    const f = Math.round(PW.api.PW.Tuning.getFrequency(note.p));

    const ctx = {
        note
    };

    const colorStyles = colorFn(ctx)

    return (
        <div className='interval' style={colorStyles}>
            <div className='name'>{name}</div>
            <div className='pod'>{`[${note.p}, ${note.d}]`}</div>
            <div className='noteIndex'>{`(${noteIndex})`}</div>
            <div className='frequency'>{`${f}Hz`}</div>
        </div>
    );
};

const Interval = ({ note, colorFn }) => {
    const interval = PW.api.PW.Vector.Interval.getName({ pod: note });

    const ctx = {
        note
    };

    const styles = colorFn(ctx);

    return (
        <div className='interval' style={styles}>
            <div className='name'>{interval}</div>
            <div className='pod'>{`[${note.p}, ${note.d}]`}</div>
            <div className='noteIndex'>{`(${note.p})`}</div>
        </div>
    );
};

const KeyCenter = ({ keyCenter, colorFn }) => {
    const noteIndex = keyCenter.p;
    const name = PW.api.PW.Vector.Note.getName({ pod: keyCenter });
    const f = Math.round(PW.api.PW.Tuning.getFrequency(keyCenter.p));

    const ctx = {
        note: keyCenter
    };

    const styles = colorFn(ctx);
    return (
        <div className='key-center' style={styles}>
            <div className='name'>{name}</div>
            <div className='pod'>{`[${keyCenter.p}, ${keyCenter.d}]`}</div>
            <div className='noteIndex'>{`(${keyCenter.p})`}</div>
            <div className='frequency'>{`${f}Hz`}</div>
        </div>
    );
};

const Meter = ({ type, intervals }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.PW.Vector.colorBy({ type: 'degree' });

    const cells = [];
    for (let i = 0; i < count; i++) {
        const interval = intervals.find(ivl => PW.api.PW.Utils.modulo(ivl[prop], count) === i);

        let styles = {};
        if (interval) {
            styles = colorFn({ note: interval });
        };

        cells.push(<div className="cell" style={styles} >{i}</div>)
    }

    return (
        <div className='meter'>
            {cells}
        </div>
    );
};

const Summary = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, intervals, keyCenter, name } = props;
    const notes = PW.api.PW.Vector.addMatrix({ a: keyCenter, B: intervals });
    const arr = intervals.map(n => <Interval note={n} colorFn={colorFn} />);
    const arr2 = notes.map(n => <Note note={n} colorFn={colorFn} />);

    //console.log('summary', intervals, keyCenter)

    return (
        <div className='summary'>
            <h3>{name}</h3>
            <label>Key Center</label>
            <KeyCenter keyCenter={keyCenter} colorFn={colorFn} />
            <div className="mid">
                <label>Intervals</label>
                <div className='interval-arr'>
                    {arr}
                </div>
                <label>d</label>
                <Meter intervals={intervals} type="degree" />
                <label>p</label>
                <Meter intervals={intervals} type="pitchClass" />

            </div>
            <label>Notes</label>
            <div className='interval-arr'>
                {arr2}
            </div>
        </div>
    );
}

export default Summary;