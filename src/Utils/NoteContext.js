import React, { useState, useEffect, createContext, useContext } from 'react';
import PW from 'play-what';

const DEFAULT_PULSES = [];
const DEFAULT_TEMPO = 120;
const DEFAULT_TIME_SIGNATURE = [4, 4];
const NOP = () => null;

const NoteContext = createContext();
NoteContext.displayName = 'NoteContext';

export const NoteContextProvider = props => {
    const [pulses, setPulses] = useState(props.initPulses || DEFAULT_PULSES);
    const [pulseIndex, setPulseIndex] = useState(0);
    const [timeSignature, setTimeSignature] = useState(props.initTimeSignature || DEFAULT_TIME_SIGNATURE);
    const [tempo, setTempo] = useState(props.tempo || DEFAULT_TEMPO);
    const [play, setPlay] = useState(false);

    const concept = pulses[pulseIndex];

    if (play) {
        const notes = PW.Theory.addVectorsBatch(concept.a, concept.B);
        const freqs = PW.Theory.getFrequencies(notes);
        PW.Sound.playNotes(freqs, 2);
        if (pulseIndex < pulses.length - 1) {
            setTimeout(
                () => setPulseIndex(pulseIndex + 1),
                3000
            );
        }
    }

    const routeContextValue = {
        concept,
        play: () => setPlay(true),
        pause: () => setPlay(false)
    }

    return (
        <NoteContext.Provider value={routeContextValue}>{props.children}</NoteContext.Provider>
    );
};

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;

