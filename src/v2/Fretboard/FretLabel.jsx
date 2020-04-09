import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { notes, noteIndex } = props;

    const note = PW.v2.Theory.getNoteByPitchClass(notes, PW.v2.Utils.modulo(noteIndex, 12));
    const styles = PW.v2.Color.byDegree(note);

    return (
        <div className='fret-label' style={styles} onClick={() => null}>
            {note && note.name}
        </div>
    );
}

export default FretLabel;