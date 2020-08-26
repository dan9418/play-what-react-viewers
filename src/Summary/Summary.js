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
            <div className='interval-name'>{interval}</div>
            <div className='pod'>{`[${note.p}, ${note.d}]`}</div>
            <div className='noteIndex'>{`(${note.p})`}</div>
            <div className='frequency'>{`${f}Hz`}</div>
        </div>
    );
};

const KeyCenter = ({ keyCenter, colorFn }) => {
    const noteIndex = keyCenter.p;
    const name = PW.api.PW.Vector.Note.getName({ pod: keyCenter });
    const interval = PW.api.PW.Vector.Interval.getName({ pod: keyCenter });
    const f = Math.round(PW.api.PW.Tuning.getFrequency(keyCenter.p));

    const ctx = {
        note: keyCenter
    };

    const bg = colorFn(ctx);
    const fg = PW.api.PW.Color.getFgColor(bg);

    const styles = {
        backgroundColor: bg,
        color: fg
    };

    return (
        <div className='key-center' style={styles}>
            <div className='name'>{name}</div>
            <div className='name'>{interval}</div>
            <div className='pod'>{`[${keyCenter.p}, ${keyCenter.d}]`}</div>
            <div className='noteIndex'>{`i: ${keyCenter.p}`}</div>
            <div className='frequency'>{`f: ${f}Hz`}</div>
        </div>
    );
};

const P = ({ type, intervals }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.PW.Color.parseColorProp;

    const ps = [];
    for (let i = 0; i < count; i++) {

        const interval = intervals.find(ivl => PW.api.PW.Utils.modulo(ivl[prop], count) === i);

        const styles = {};

        if (interval) {
            const bg = colorFn(type, interval);
            const fg = PW.api.PW.Color.getFgColor(bg);

            styles.backgroundColor = bg;
            styles.color = fg;
        };

        ps.push(<div className="p" style={styles} />)
    }

    return (
        <div className='ps' style={{}}>
            {ps}
        </div>
    );
};

const Summary = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, intervals, keyCenter } = props;
    const arr = intervals.map(n => <Note note={n} colorFn={colorFn} />);

    return (
        <div className='summary'>
            <div className='interval-arr'>
                {arr}
            </div>
            <P intervals={intervals} type="degree" />
            <P intervals={intervals} type="pitchClass" />
            <KeyCenter keyCenter={keyCenter} colorFn={colorFn} />
        </div>
    );
}

export default Summary;