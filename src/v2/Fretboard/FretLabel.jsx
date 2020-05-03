import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const { Theory, Constants, Presets, Color, Label } = PW.v2;


const FretLabel = props => {
    const { notes, noteIndex, minIndex, maxIndex } = props;

    const note = Theory.findNoteWithPitch(notes, noteIndex, true);
    // const minNote = Theory.getNoteByNoteIndex(fretMapping.notes, minIndex);
    // const maxNote = Theory.getNoteByNoteIndex(fretMapping.notes, maxIndex);

    const styles = Color.degree(note);
    const label = Label.degree(note);

    return (
        <div className='fret-label' style={styles} onClick={() => null}>
            {label}
        </div>
    );
}

export default FretLabel;