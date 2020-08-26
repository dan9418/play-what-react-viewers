import PW from 'play-what';
import React from "react";
import "./Summary.css";
import { Interval, KeyCenter, Note } from './SummaryHelpers';

const DEFAULT_PROPS = {
    colorFn: PW.api.PW.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Meter = ({ type, pods }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.PW.Vector.colorBy({ type: 'degree' });

    const cells = [];
    for (let i = 0; i < count; i++) {
        const pod = pods.find(ivl => PW.api.PW.Utils.modulo(ivl[prop], count) === i);

        let styles = {};
        if (pod) {
            styles = colorFn({ pod });
        };

        cells.push(<div className="cell" style={styles} key={i}>{i}</div>)
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
    const arr = intervals.map((n, i) => <Interval pod={n} ctx={{ pod: n }} colorFn={colorFn} key={i} />);
    const arr2 = notes.map((n, i) => <Note pod={n} ctx={{ pod: n }} colorFn={colorFn} key={i} />);

    //console.log('summary', intervals, keyCenter)

    return (
        <div className='summary'>
            <h3>{name}</h3>
            <label>Key Center</label>
            <KeyCenter pod={keyCenter} colorFn={colorFn} ctx={{ pod: keyCenter }} />
            <div className="mid">
                <label>Intervals</label>
                <div className='interval-arr'>
                    {arr}
                </div>
                <label>d</label>
                <Meter pods={intervals} type="degree" />
                <label>p</label>
                <Meter pods={intervals} type="pitchClass" />

            </div>
            <label>Notes</label>
            <div className='interval-arr'>
                {arr2}
            </div>
        </div>
    );
}

export default Summary;