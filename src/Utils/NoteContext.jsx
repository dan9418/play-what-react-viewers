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
    // Positon
    state: [0, 0, 0],
    nextState: [0, 0, 0],
    setState: () => null,
    // Section
    sectionIndex: 0,
    nextSectionIndex: 0,
    // Row
    rowIndex: 0,
    nextRowIndex: 0,
    // Col
    colIndex: 0,
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

const getNextState = (sections, [sectionIndex, rowIndex, colIndex]) => {
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

const getNoteAt = (song, s, r, c) => {
    const section = song.sections[s];
    const row = section.rows[r];
    const col = row.cols[c];
    return col;
}

export const NoteContextProvider = props => {

    // Full data
    const [song, setSong] = useState(DEFAULT_SONG);
    // Context
    const [state, setState] = useState([0, 0, 0, 0, 4 /*temp*/]);
    const section = song.sections[state[0]];
    const row = section.rows[state[1]];
    const note = row.cols[state[2]];
    const beatIndex = state[3];
    const remBeats = state[4];
    // Playback
    const [tempo, setTempo] = useState(DEFAULT_TEMPO);
    const [play, togglePlay] = useToggle(false);

    /*useInterval(() => {
        setBeatIndex(beatIndex + 1);
    }, play ? beatDuration * 1000 : null);*/

    if (!play) {
        PW.Sound.stopNotes();
    }
    else {
        const beatDuration = 1 / (tempo / 60);
        if (remBeats === note.t) {
            const notes = PW.Theory.addVectorsBatch(note.a, note.B);
            const freqs = PW.Theory.getFrequencies(notes);
            const pulseDuration = beatDuration * note.t; // seconds
            PW.Sound.playNotes(freqs, pulseDuration / 2);
            console.log(beatIndex, 'P');
        }
        if (remBeats > 1) {
            setTimeout(() => {
                setState([...state.slice(0, 3), beatIndex + 1, remBeats - 1]);
            }, beatDuration * 1000);
            console.log(beatIndex, remBeats, '-', state);
        }
        else if (remBeats === 1) {
            const nextState = getNextState(song.sections, state);
            const nextNote = getNoteAt(song, ...nextState);
            setTimeout(() => {
                setState([...nextState, beatIndex + 1, nextNote.t]);
            }, beatDuration * 1000)
            console.log(beatIndex, remBeats, '>', state);
        }
    }

    const setA = a => {
        const newSong = { ...song };
        newSong.sections[state[0]].rows[state[1]].cols[state[2]].a = a;
        setSong(newSong);
    }

    const setB = B => {
        const newSong = { ...song };
        newSong.sections[state[0]].rows[state[1]].cols[state[2]].B = B;
        setSong(newSong);
    }

    const setT = t => {
        const newSong = { ...song };
        newSong.sections[state[0]].rows[state[1]].cols[state[2]].t = t;
        setSong(newSong);
    }

    const setPosition = (s, r, c) => {
        setState([s, r, c, 0, 4]);
    }

    const routeContextValue = {
        song,
        note,
        a: note.a,
        B: note.B,
        t: note.t,
        setA,
        setB,
        setT,
        setPosition,
        beatIndex,
        setBeatIndex: () => null,
        sectionIndex: state[0],
        rowIndex: state[1],
        colIndex: state[2],
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

