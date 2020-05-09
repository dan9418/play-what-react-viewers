import Fretboard from './Modules/Fretboard/Fretboard';
import FretboardCard from './Modules/Fretboard/FretboardCard';

import Keyboard from './Modules/Keyboard/Keyboard';
import KeyboardCard from './Modules/Keyboard/KeyboardCard';

import Graph from './Modules/Graph/Graph';
import GraphCard from './Modules/Graph/GraphCard';

import TrueScale from './Modules/TrueScale/TrueScale';
import TrueScaleCard from './Modules/TrueScale/TrueScaleCard';

import HarmonicSeries from './Modules/HarmonicSeries/HarmonicSeries';
import HarmonicSeriesCard from './Modules/HarmonicSeries/HarmonicSeriesCard';

import InputDocsCard from './Modules/InputDocs/InputDocsCard';

import ErrorBoundary from './UI/ErrorBoundary';

import './index.css';

const Modules = {
    Fretboard,
    FretboardCard,
    Keyboard,
    KeyboardCard,
    Graph,
    GraphCard,
    TrueScale,
    TrueScaleCard,
    HarmonicSeries,
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