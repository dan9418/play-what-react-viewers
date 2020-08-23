import * as React from "react";
import PW from 'play-what';
//import "./Keyboard.css";

const DEFAULT_PROPS = {
    colorFn: () => { },
    textFn: () => { },
    notes: []
}

const Summary = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, textFn, notes } = props;

    const arr = notes.map(n => {

        const ctx = {
            note: n
        };

        const text = textFn(ctx);

        const bg = colorFn(ctx)
        const fg = PW.api.PW.Color.getFgColor(bg);

        const styles = {
            backgroundColor: bg,
            color: fg,
            width: '64px',
            height: '96px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '8px',
            margin: '8px'
        };

        return (
            <div className='summary' style={styles}>
                {text}
            </div>
        );
    })

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    return (
        <div className='summary' style={styles}>
            {arr}
        </div>
    );
}

export default Summary;