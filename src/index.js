import Fretboard from './Modules/Fretboard/Fretboard';
import Keyboard from './Modules/Keyboard/Keyboard';
import FretboardCard from './Modules/Fretboard/FretboardCard';
import KeyboardCard from './Modules/Keyboard/KeyboardCard';
import GraphCard from './Modules/Graph/GraphCard';
import TrueScaleCard from './Modules/TrueScale/TrueScaleCard';
import HarmonicSeriesCard from './Modules/HarmonicSeries/HarmonicSeriesCard';

import ErrorBoundary from './UI/ErrorBoundary';

const Modules = {
    Fretboard,
    FretboardCard,
    Keyboard,
    KeyboardCard,
    GraphCard,
    TrueScaleCard,
    HarmonicSeriesCard
}

const UI = {
    ErrorBoundary
}

export default {
    Modules,
    UI
 };