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
            <div className='pod'>{`[${note.p}, ${note.d}]`}</div>
            <div className='noteIndex'>{`(${note.p})`}</div>
            <div className='frequency'>{`${f}Hz`}</div>
        </div>
    );
};

const Interval = ({ note, colorFn }) => {
    const interval = PW.api.PW.Vector.Interval.getName({ pod: note });

    const ctx = {
        note
    };

    const bg = colorFn(ctx);
    const fg = PW.api.PW.Color.getFgColor(bg);

    const styles = {
        backgroundColor: bg,
        color: fg
    };

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

    const bg = colorFn(ctx);
    const fg = PW.api.PW.Color.getFgColor(bg);

    const styles = {
        backgroundColor: bg,
        color: fg
    };

    return (
        <div className='key-center' style={styles}>
            <div className='name'>{name}</div>
            <div className='pod'>{`[${keyCenter.p}, ${keyCenter.d}]`}</div>
            <div className='noteIndex'>{`(${keyCenter.p})`}</div>
            <div className='frequency'>{`${f}Hz`}</div>
        </div>
    );
};

const P = ({ type, intervals }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.PW.Vector.colorBy({ type: 'degree' });

    const ps = [];
    for (let i = 0; i < count; i++) {

        const interval = intervals.find(ivl => PW.api.PW.Utils.modulo(ivl[prop], count) === i);

        const styles = {
            textAlign: 'center',
            color: '#555'
        };

        if (interval) {
            const bg = colorFn({ note: interval });
            const fg = PW.api.PW.Color.getFgColor(bg);

            styles.backgroundColor = bg;
            styles.color = fg;
        };

        ps.push(<div className="p" style={styles} >{i}</div>)
    }

    return (
        <div className='ps' style={{}}>
            {ps}
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
                <P intervals={intervals} type="degree" />
                <label>p</label>
                <P intervals={intervals} type="pitchClass" />

            </div>
            <label>Notes</label>
            <div className='interval-arr'>
                {arr2}
            </div>
        </div>
    );
}

export default Summary;