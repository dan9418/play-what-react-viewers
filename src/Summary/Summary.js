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
            <div className='pitch'>{`p: ${note.p}`}</div>
            <div className='degree'>{`d: ${note.d}`}</div>
            <div className='noteIndex'>{`i: ${note.p}`}</div>
            <div className='frequency'>{`f: ${f}Hz`}</div>
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
            <div className='interval-name'>{interval}</div>
            <div className='pitch'>{`p: ${keyCenter.p}`}</div>
            <div className='degree'>{`d: ${keyCenter.d}`}</div>
            <div className='noteIndex'>{`i: ${keyCenter.p}`}</div>
            <div className='frequency'>{`f: ${f}Hz`}</div>
        </div>
    );
};

const P = ({ intervals, colorFn }) => {
    const ps = [];
    for (let i = 0; i < 12; i++) {

        const interval = intervals.find(ivl => ivl.p === i);

        const styles = {};

        if (interval) {
            const ctx = {
                note: interval
            };

            const bg = colorFn(ctx);
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
            <P intervals={intervals} colorFn={colorFn} />
            <KeyCenter keyCenter={keyCenter} colorFn={colorFn} />
        </div>
    );
}

export default Summary;