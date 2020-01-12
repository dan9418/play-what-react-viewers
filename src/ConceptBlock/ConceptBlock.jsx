import * as React from 'react';
import './ConceptBlock.css';
import PlayWhat from 'play-what';

function NoteBlock(props) {
    let note = new PlayWhat.FunctionalNote(props.keyCenter, props.interval);
    return (
        <div
            className='note-block'
            style={props.colorStrategy.fx(note, props.viewerData)}
            onClick={() => PlayWhat.Sound.play(note.frequency, .5)}
        >
            <div className='name'>{props.labelStrategy.fx(note, props.viewerData)}</div>
        </div>
    )
}

export default function ConceptBlock(props) {
    let viewerData = {
        minNote: new PlayWhat.FunctionalNote(props.keyCenter, props.concept.intervals[0]),
        maxNote: new PlayWhat.FunctionalNote(props.keyCenter, props.concept.intervals[props.concept.intervals.length - 1])
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