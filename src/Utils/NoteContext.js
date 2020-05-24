import React, { useState, useEffect, createContext, useContext } from 'react';
import PW from 'play-what';
import AUTUMN_LEAVES from './AutumnLeaves';

const DEFAULT_PULSES = AUTUMN_LEAVES;
const DEFAULT_TEMPO = 120;
const DEFAULT_TIME_SIGNATURE = [4, 4];
const NOP = () => null;


const DEFAULT_NOTE_CONTEXT = {
    concept:
    {
        a: PW.Presets.KEY_CENTERS.A,
        B: PW.Presets.SCALE.NaturalMinor.intervals
    },
    nextConcept: {
        a: PW.Presets.KEY_CENTERS.A,
        B: PW.Presets.SCALE.Major.intervals
    }
};

const NoteContext = createContext(DEFAULT_NOTE_CONTEXT);
NoteContext.displayName = 'NoteContext';

export const NoteContextProvider = props => {
    const [pulses, setPulses] = useState(props.initPulses || DEFAULT_PULSES);
    const [pulseIndex, setPulseIndex] = useState(0);
    const [timeSignature, setTimeSignature] = useState(props.initTimeSignature || DEFAULT_TIME_SIGNATURE);
    const [tempo, setTempo] = useState(props.tempo || DEFAULT_TEMPO);
    const [play, setPlay] = useState(false);

    const isLast = pulseIndex === pulses.length - 1;

    const concept = pulses[pulseIndex];
    const nextConcept = isLast ? pulses[0] : pulses[pulseIndex + 1];

    if (play) {
        const notes = PW.Theory.addVectorsBatch(concept.a, concept.B);
        const freqs = PW.Theory.getFrequencies(notes);
        PW.Sound.playNotes(freqs, 2);
        if (!isLast) {
            setTimeout(
                () => setPulseIndex(pulseIndex + 1),
                3000
            );
        }
    }

    const routeContextValue = {
        concept,
        nextConcept,
        play: () => setPlay(true),
        pause: () => setPlay(false)
    }

    return (
        <NoteContext.Provider value={routeContextValue}>{props.children}</NoteContext.Provider>
    );
};

export const NoteContextConsumer = NoteContext.Consumer;

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;

