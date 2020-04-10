import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { fretMapping, noteIndex } = props;

    const note = PW.v2.Theory.getNoteByPitchClass(fretMapping.notes, PW.v2.Utils.modulo(noteIndex, 12));
    const styles = fretMapping.colorFn(note);

    return (
        <div className='fret-label' style={styles} onClick={() => null}>
            {fretMapping.labelFn(note)}
        </div>
    );
}

export default FretLabel;