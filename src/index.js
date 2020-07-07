import Fretboard from './Modules/Fretboard/FretboardController';
import Keyboard from './Modules/Keyboard/KeyboardController';
import Graph from './Modules/Graph/Graph';
import Rhythm from './Modules/Rhythm/Rhythm';
import TrueScale from './Modules/TrueScale/TrueScale';
import HarmonicSeries from './Modules/HarmonicSeries/HarmonicSeries';

import Chart from './Modules/Chart/Chart';

import ErrorBoundary from './UI/ErrorBoundary';
import ButtonInput from './UI/ButtonInput/ButtonInput';
import Dropdown from './UI/Dropdown/Dropdown';
import ConceptInput from './UI/ConceptInput/ConceptInput';

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
    Dropdown,
    ConceptInput
};

export default {
    Modules,
    UI
 };