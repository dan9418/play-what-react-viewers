import * as React from 'react';
import './RomanNumeralBlock.css';
import PlayWhat from 'play-what';

export default function RomanNumeralBlock(props) {
    return (
        <div
            className='roman-numeral-block'
            onClick={() => PlayWhat.Sound.playNotes(props.romanNumeral.getNotes(props.keyCenter))}
        >
            <div className='name'>{props.romanNumeral.name}</div>
            {getIntervalTable(props.romanNumeral, props.keyCenter)}
        </div>
    )
}

function getIntervalTable(romanNumeral, keyCenter) {
    return (
        <table>
            <tbody>
                <tr>{romanNumeral.intervals.map((i) => <td key={i.id}>{(new PlayWhat.FunctionalNote(keyCenter, i)).name}</td>)}</tr>
                <tr>{romanNumeral.intervals.map((i) => <td key={i.id}><IntervalLabel interval={i} /></td>)}</tr>
                <tr>{romanNumeral.relativeIntervals.map((i) => <td key={i.id}><IntervalLabel interval={i} /></td>)}</tr>
            </tbody>
        </table>
    );
}

function IntervalLabel(props) {
    return (
        <div
            className='interval-label'
            style={PlayWhat.ColorBy.degree.fx({ interval: props.interval })}
        >
            {props.interval.id}
        </div>
    )
}
