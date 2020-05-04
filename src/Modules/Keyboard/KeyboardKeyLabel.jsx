import * as React from "react";
import "./Keyboard.css";
import PW from 'play-what';

export default function KeyboardKeyLabel(props) {
    const { notes, noteIndex, minIndex, maxIndex } = props;

    const note = PW.Theory.findNoteWithPitch(notes, noteIndex, true);
    // const minNote = Theory.getNoteByNoteIndex(fretMapping.notes, minIndex);
    // const maxNote = Theory.getNoteByNoteIndex(fretMapping.notes, maxIndex);

    const styles = PW.Color.degree(note);
    const label = PW.Label.degree(note);


    return (
        <div className='keyboard-key-label' style={styles} onClick={() => null}>
            {label}
        </div>
    );
}