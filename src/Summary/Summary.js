import * as React from "react";
import PW from 'play-what';
import "./Summary.css";

const DEFAULT_PROPS = {
    colorFn: () => { },
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

    const bg = colorFn(ctx)
    const fg = PW.api.PW.Color.getFgColor(bg);

    const styles = {
        backgroundColor: bg,
        color: fg
    };

    return (
        <div className='interval' style={styles}>
            <div className='name'>{name}</div>
            <div className='interval'>{interval}</div>
            <div className='pitch'>{`p: ${note.p}`}</div>
            <div className='degree'>{`d: ${note.d}`}</div>
            <div className='noteIndex'>{`i: ${note.p}`}</div>
            <div className='frequency'>{`f: ${f}Hz`}</div>
        </div>
    );
};

const Summary = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, intervals, keyCenter } = props;
    const arr = intervals.map(n => <Note note={n} colorFn={props.colorFn} />);

    return (
        <div className='summary'>
            <div className='interval-arr'>
                {arr}
            </div>
        </div>
    );
}

export default Summary;