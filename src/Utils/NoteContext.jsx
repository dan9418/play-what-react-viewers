import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import PW from 'play-what';
import AUTUMN_LEAVES from './AutumnLeaves';

const DEFAULT_SONG = AUTUMN_LEAVES;
const DEFAULT_TEMPO = 120;
const NOP = () => null;


const DEFAULT_NOTE_CONTEXT = {
    pulses: [],
    pulseIndex: 0,
    setPulseIndex: NOP,
    beatIndex: 0,
    concept: { a: 0, B: [{ d: 0, p: 0 }] },
    setConcept: NOP,
    nextConcept: { a: 0, B: [{ d: 0, p: 0 }] },
    tempo: 120,
    setTempo: NOP,
    play: NOP,
    pause: NOP,
};

const NoteContext = createContext(DEFAULT_NOTE_CONTEXT);
NoteContext.displayName = 'NoteContext';

const useToggle = (initValue = false) => {
    const [value, setValue] = useState(initValue);
    return [value, () => setValue(!value)];
};

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const getNextState = (pulses, pulseIndex, sections, sectionIndex) => {
    const isLastPulse = pulseIndex === pulses.length - 1;
    const isLastSection = sectionIndex === sections.length - 1;
    if(isLastPulse) {
        if(isLastSection) {
            return [0, 0];
        }
        return [sectionIndex + 1, 0];
    }
    return [sectionIndex, pulseIndex + 1];
};

export const NoteContextProvider = props => {
    // Timeline
    const song = DEFAULT_SONG;
    const [sectionIndex, setSectionIndex] = useState(0);
    const [pulseIndex, setPulseIndex] = useState(0);
    const [beatIndex, setBeatIndex] = useState(0);
    const [nextPulseBeat, setNextPulseBeat] = useState(0);
    // Playback
    const [tempo, setTempo] = useState(DEFAULT_TEMPO);
    const [play, togglePlay] = useToggle(false);
    const beatDuration = 60 / tempo * 1000;
    useInterval(() => {
        setBeatIndex(beatIndex + 1);
    }, play ? beatDuration : null);
    // Context
    const section = song.sections[sectionIndex];
    const pulse = section.pulses[pulseIndex];
    const [nextSectionIndex, nextPulseIndex] = getNextState(section.pulses, pulseIndex, song.sections, sectionIndex);
    const nextPulse = song.sections[nextSectionIndex].pulses[nextPulseIndex];
    console.log(sectionIndex, pulseIndex, beatIndex);

    if (play && beatIndex === nextPulseBeat) {
        const notes = PW.Theory.addVectorsBatch(pulse.a, pulse.B);
        const freqs = PW.Theory.getFrequencies(notes);
        const pulseDuration = beatDuration * pulse.beats / 2000;
        // console.log('sound', pulseIndex);
        PW.Sound.playNotes(freqs, pulseDuration);
        setNextPulseBeat(beatIndex + pulse.beats);
        setSectionIndex(nextSectionIndex);
        setPulseIndex(nextPulseIndex);
    }

    const routeContextValue = {
        pulse,
        nextPulse,
        sections: song.sections,
        sectionIndex,
        setSectionIndex,
        nextSectionIndex,
        pulses: section[pulseIndex],
        pulseIndex,
        setPulseIndex,
        nextPulseIndex,
        beatIndex,
        tempo,
        setTempo,
        play,
        togglePlay
    };

    return <NoteContext.Provider value={routeContextValue}>{props.children}</NoteContext.Provider>;
};

export const NoteContextConsumer = NoteContext.Consumer;

const useNoteContext = () => useContext(NoteContext);

export default useNoteContext;

