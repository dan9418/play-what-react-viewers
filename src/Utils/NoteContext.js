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
    const [beatIndex, setBeatIndex] = useState(0);
    const [nextPulseBeat, setNextPulseBeat] = useState(0);
    const [pulseIndex, setPulseIndex] = useState(0);
    const [timeSignature, setTimeSignature] = useState(props.initTimeSignature || DEFAULT_TIME_SIGNATURE);
    const [tempo, setTempo] = useState(props.tempo || DEFAULT_TEMPO);
    const [play, setPlay] = useState(false);

    const isLast = pulseIndex === pulses.length - 1;

    const concept = pulses[pulseIndex];
    const setConcept =  x => setPulses([...pulses.slice(0, pulseIndex), x, ...pulses.slice(pulseIndex + 1)]);
    const nextConcept = isLast ? pulses[0] : pulses[pulseIndex + 1];

    const beatDuration = 60 / tempo * 1000;

    if (play) {
        if (!isLast) {
            const notes = PW.Theory.addVectorsBatch(concept.a, concept.B);
            const freqs = PW.Theory.getFrequencies(notes);

            if (beatIndex === nextPulseBeat) {
                const pulseDuration = beatDuration * concept.beats / 2000;
                PW.Sound.playNotes(freqs, pulseDuration);
                setNextPulseBeat(beatIndex + concept.beats);
                setPulseIndex(pulseIndex + 1)
            }
            setTimeout(
                () => setBeatIndex(beatIndex + 1),
                beatDuration
            );
        }
    }

    const routeContextValue = {
        pulses,
        pulseIndex,
        setPulseIndex,
        beatIndex,
        concept,
        setConcept,
        nextConcept,
        tempo,
        setTempo,
        play: () => setPlay(true),
        pause: () => setPlay(false)
    };

    return <NoteContext.Provider value={routeContextValue}>{props.children}</NoteContext.Provider>;
};

export const NoteContextConsumer = NoteContext.Consumer;

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;

