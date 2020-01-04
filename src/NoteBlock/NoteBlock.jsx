import * as React from 'react';
import './NoteBlock.css';
import PlayWhat from 'play-what';

export default function NoteBlock(props) {
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