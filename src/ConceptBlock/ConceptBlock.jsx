import * as React from 'react';
import './ConceptBlock.css';
import NoteBlock from '../NoteBlock/NoteBlock';
import { Theory } from 'play-what';

export default function ConceptBlock(props) {
    let viewerData = {
        minNote: new Theory.FunctionalNote(props.keyCenter, props.concept.intervals[0]),
        maxNote: new Theory.FunctionalNote(props.keyCenter, props.concept.intervals[props.concept.intervals.length - 1])
    }
    return (
        <div className='concept-block'>
            {props.concept.intervals.map(i => (
                <NoteBlock
                    key={i.id}
                    keyCenter={props.keyCenter}
                    interval={i}
                    colorStrategy={props.colorStrategy}
                    labelStrategy={props.labelStrategy}
                    viewerData={viewerData}
                />
            ))}
        </div>
    )
}