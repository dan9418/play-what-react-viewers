import PW from 'play-what';
import React from "react";
import "./Explorer.css";
import { Interval, KeyCenter, Note } from './ExplorerHelpers';

const DEFAULT_PROPS = {
    colorFn: PW.api.PW.Vector.colorBy({ type: 'degree' }),
    intervals: [],
    keyCenter: null
}

const Meter = ({ type, pods }) => {
    let count = type === 'degree' ? 7 : 12;
    let prop = type === 'degree' ? 'd' : 'p';
    let colorFn = PW.api.PW.Vector.colorBy({ type });

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

const Explorer = userProps => {
    const props = { ...DEFAULT_PROPS, ...userProps };

    const { colorFn, intervals, keyCenter, name } = props;
    const notes = PW.api.PW.Vector.addMatrix({ a: keyCenter, B: intervals });
    const intervalComps = intervals.map((n, i) => <Interval pod={n} ctx={{ pod: n }} colorFn={colorFn} key={i} />);
    const noteComps = notes.map((n, i) => <Note pod={n} ctx={{ pod: n, homePod: keyCenter }} colorFn={colorFn} key={i} />);

    return (
        <div className='summary'>
            <h3>{name}</h3>
            <div className="mid">
                <label>Key Center</label>
                <KeyCenter pod={keyCenter} colorFn={colorFn} ctx={{ pod: keyCenter }} />
            </div>
            <div className="mid">
                <label>Intervals</label>
                <div className='interval-arr'>
                    {intervalComps}
                </div>
                <label>d</label>
                <Meter pods={intervals} type="degree" />
                <label>p</label>
                <Meter pods={intervals} type="pitchClass" />
            </div>
            <div className="mid">
                <label>Notes</label>
                <div className='interval-arr'>
                    {noteComps}
                </div>
                <label>d</label>
                <Meter pods={notes} type="degree" />
                <label>p</label>
                <Meter pods={notes} type="pitchClass" />
            </div>
        </div>
    );
}

export default Explorer;