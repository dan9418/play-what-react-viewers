import Fretboard from './Modules/Fretboard/Fretboard';
import Keyboard from './Modules/Keyboard/Keyboard';
import FretboardCard from './Modules/Fretboard/FretboardCard';
import KeyboardCard from './Modules/Keyboard/KeyboardCard';
import GraphCard from './Modules/Graph/GraphCard';
import TrueScaleCard from './Modules/TrueScale/TrueScaleCard';
import HarmonicSeriesCard from './Modules/HarmonicSeries/HarmonicSeriesCard';
import InputDocsCard from './Modules/InputDocs/InputDocsCard';

import ErrorBoundary from './UI/ErrorBoundary';

import './index.css';

const Modules = {
    Fretboard,
    FretboardCard,
    Keyboard,
    KeyboardCard,
    GraphCard,
    TrueScaleCard,
    HarmonicSeriesCard,
    InputDocsCard
}

const UI = {
    ErrorBoundary
}

export default {
    Modules,
    UI
 };