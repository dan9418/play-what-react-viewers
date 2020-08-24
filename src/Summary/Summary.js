import * as React from "react";
import PW from 'play-what';
//import "./Keyboard.css";

const DEFAULT_PROPS = {
    colorFn: () => { },
    intervals: [],
    keyCenter: null
}

const Summary = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, intervals, keyCenter } = props;

    const arr = intervals.map(n => {

        const noteIndex = n.p;
        const name = PW.api.PW.Vector.Note.getName({ pod: n });
        const interval = PW.api.PW.Vector.Interval.getName({ pod: n });
        const f = Math.round(PW.api.PW.Tuning.getFrequency(n.p));

        const ctx = {
            note: n
        };

        const bg = colorFn(ctx)
        const fg = PW.api.PW.Color.getFgColor(bg);

        const styles = {
            backgroundColor: bg,
            color: fg,
            width: '128px',
            height: '256px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            margin: '8px'
        };

        return (
            <div className='note-summary' style={styles}>
                <div className='name'>{name}</div>
                <div className='interval'>{interval}</div>
                <div className='pitch'>{`p: ${n.p}`}</div>
                <div className='degree'>{`d: ${n.d}`}</div>
                <div className='noteIndex'>{`i: ${n.p}`}</div>
                <div className='frequency'>{`f: ${f}Hz`}</div>
            </div>
        );
    })

    const intervalStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    const bg = colorFn({ note: keyCenter })
    const fg = PW.api.PW.Color.getFgColor(bg);
    const name = PW.api.PW.Vector.Note.getName({ pod: keyCenter });
    const keyCenterStyles = {
        backgroundColor: bg,
        color: fg,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        margin: '8px'
    };

    return (
        <div className='summary'>
            <div style={intervalStyles}>
                {arr}
            </div>
            <div className='note-summary' style={keyCenterStyles}>
                <div className='name'>{name}</div>
            </div>
        </div>
    );
}

export default Summary;