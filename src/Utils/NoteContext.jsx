import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import PW from 'play-what';
import AUTUMN_LEAVES from './AutumnLeaves';

const DEFAULT_NOTE = { a: [0, 0], B: [[0, 0]] };
const DEFAULT_SONG = AUTUMN_LEAVES;
const DEFAULT_TEMPO = 120;
const NOP = () => null;


const DEFAULT_NOTE_CONTEXT = {
    // Full data
    song: { sections: [{ rows: [{ cols: [DEFAULT_NOTE] }] }] },
    // Shortcut data
    note: DEFAULT_NOTE,
    nextNote: DEFAULT_NOTE,
    // Beat
    beatIndex: 0,
    setBeatIndex: () => null,
    // Section
    sectionIndex: 0,
    setSectionIndex: () => null,
    nextSectionIndex: 0,
    // Row
    rowIndex: 0,
    setRowIndex: () => null,
    nextRowIndex: 0,
    // Col
    colIndex: 0,
    setColIndex: () => null,
    nextColIndex: 0,
    // Tempo
    tempo: 0,
    setTempo: () => null,
    // Playback
    play: () => null,
    togglePlay: () => null
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

const getNextState = (sections, sectionIndex, rowIndex, colIndex) => {
    const isLastSection = sectionIndex === sections.length - 1;
    const isLastRow = rowIndex === sections[sectionIndex].rows.length - 1;
    const isLastCol = colIndex === sections[sectionIndex].rows[rowIndex].cols.length - 1;
    if (isLastCol) {
        if (isLastRow) {
            if (isLastSection) {
                return [0, 0, 0];
            }
            return [sectionIndex + 1, 0, 0];
        }
        return [sectionIndex, rowIndex + 1, 0];
    }
    return [sectionIndex, rowIndex, colIndex + 1];
};

export const NoteContextProvider = props => {

    // Full data
    const song = DEFAULT_SONG;
    // Pulse context
    const [sectionIndex, setSectionIndex] = useState(0);
    const [rowIndex, setRowIndex] = useState(0);
    const [colIndex, setColIndex] = useState(0);
    // Beat context
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
    const row = section.rows[rowIndex];
    const note = row.cols[colIndex];
    const nextState = getNextState(song.sections, sectionIndex, rowIndex, colIndex);
    const nextNote = song.sections[nextState[0]].rows[nextState[1]].cols[nextState[2]];
    console.log(beatIndex, note, 100 / note.t, nextState);

    if (play && beatIndex === nextPulseBeat) {
        const notes = PW.Theory.addVectorsBatch(note.a, note.B);
        const freqs = PW.Theory.getFrequencies(notes);
        const pulseDuration = beatDuration * (100 / 1000 / note.t);
        // console.log('sound', pulseIndex);
        PW.Sound.playNotes(freqs, pulseDuration);
        setNextPulseBeat(beatIndex + 100 / note.t);
        setSectionIndex(nextState[0]);
        setRowIndex(nextState[1]);
        setColIndex(nextState[2]);
    }

    const routeContextValue = {
        song,
        note,
        nextNote,
        beatIndex,
        setBeatIndex,
        sectionIndex,
        setSectionIndex,
        nextSectionIndex: nextState[0],
        rowIndex,
        setRowIndex,
        nextRowIndex: nextState[1],
        colIndex,
        setColIndex,
        nextColIndex: nextState[2],
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

