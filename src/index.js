import Fretboard from './Modules/Fretboard/Fretboard';
import Keyboard from './Modules/Keyboard/Keyboard';
import Graph from './Modules/Graph/Graph';
import Rhythm from './Modules/Rhythm/Rhythm';
import TrueScale from './Modules/TrueScale/TrueScale';
import HarmonicSeries from './Modules/HarmonicSeries/HarmonicSeries';
import Chart from './Modules/Chart/Chart';

import ErrorBoundary from './UI/ErrorBoundary';
import ButtonInput from './UI/ButtonInput/ButtonInput';
import ConceptInput from './UI/ConceptInput/ConceptInput';

import useNoteContext, { NoteContextProvider, NoteContextConsumer } from './Utils/NoteContext';

import './index.css';

const Modules = {
    Fretboard,
    Keyboard,
    Graph,
    TrueScale,
    HarmonicSeries,
    Chart,
    Rhythm,
};

const UI = {
    ErrorBoundary,
    ButtonInput,
    ConceptInput
};

const Utils = {
    useNoteContext,
    NoteContextProvider,
    NoteContextConsumer
}

export default {
    Modules,
    UI,
    Utils
 };