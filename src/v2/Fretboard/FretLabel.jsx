import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { notes, noteIndex } = props;

    const note = PW.v2.Theory.getNoteByPitchClass(notes, noteIndex);

    return (
        <div className='fret-label' style={{}} onClick={() => null}>
            {note && note.name}
        </div>
    );
}

export default FretLabel;