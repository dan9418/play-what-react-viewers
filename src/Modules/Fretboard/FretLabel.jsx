import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";
import useNoteContext from '../../Utils/NoteContext';

const FretLabel = props => {
    const { noteIndex, minIndex, maxIndex } = props;
    const noteContext = useNoteContext();
    const keyCenter = noteContext.pulse.a;
    const intervals = noteContext.pulse.B;
    const i = PW.Theory.findNoteIndex(keyCenter, intervals, noteIndex, true);
    // const note = PW.Theory.findNoteWithPitch(intervals, noteIndex, true);
    // const minNote = Theory.getNoteByNoteIndex(fretMapping.notes, minIndex);
    // const maxNote = Theory.getNoteByNoteIndex(fretMapping.notes, maxIndex);
    const nextKeyCenter = noteContext.nextPulse.a;
    const nextIntervals = noteContext.nextPulse.B;
    const j = PW.Theory.findNoteIndex(nextKeyCenter, nextIntervals, noteIndex, true);

    const styles = PW.Color.degreeForesight(intervals[i], nextIntervals[j]);
    const label = PW.Label.degree(nextIntervals[j]);

    return (
        <div className='fret-label' style={styles} onClick={() => PW.Sound.play(PW.Theory.getFrequency(noteIndex), .5)}>
            {label}
        </div>
    );
}

export default FretLabel;