import * as React from 'react';
import './ConceptBlock.css';
import NoteBlock from '../NoteBlock/NoteBlock';

export default function ConceptBlock(props) {
    return (
        <div
            className='concept-block'
        >
            <div className='header'>{props.concept.name}</div>
            {props.concept.intervals.map(i => <NoteBlock key={i.id} keyCenter={props.keyCenter} interval={i} />)}
        </div>
    )
}