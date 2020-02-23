import * as React from 'react';
import './RangeInput.css';

export default function RangeInput(props) {
    let classes = ['switch-input', props.value ? 'true' : 'false'];
    const percentLow = props.low / props.max * 100;
    const percentHigh = props.high / props.max * 100;
    return (
        <div className='range-input'>
            <div className='value min'>{props.min}</div>
            <div className='track' onClick={() => { }}>
                <div className='marker low' style={{ left: `${percentLow}%` }}>
                    <input type='number' className='marker-input' min={props.min} max={props.max} value={props.low} onChange={event => props.setLowValue(event.target.value.replace(/\D/, ''))} />
                </div>
                <div className='marker high' style={{ left: `${percentHigh}%` }}>
                    <input type='number' className='marker-input' min={props.min} max={props.max} value={props.high} onChange={event => props.setHighValue(event.target.value.replace(/\D+/, ''))} />
                </div>
                <div className='active' style={{ width: `${percentHigh - percentLow}%`, left: `${percentLow + 1}%` }} />
            </div>
            <div className='value max'>{props.max}</div>
        </div>
    );
}