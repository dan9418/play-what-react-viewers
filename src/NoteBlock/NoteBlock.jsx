import * as React from 'react';
import './NoteBlock.css';
import { Theory, Strategies, Utils } from 'play-what';

export default function NoteBlock(props) {
    let note = new Theory.FunctionalNote(props.keyCenter, props.interval);
    return (
        <div
            className='note-block'
            style={Strategies.ColorBy.degree.fx(note)}
            onClick={() => Utils.Sound.play(note.frequency, .5)}
        >
            <div className="name">{note.name}</div>
        </div>
    )
}