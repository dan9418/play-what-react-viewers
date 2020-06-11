import Fretboard from './Modules/Fretboard/Fretboard';
import FretboardCard from './Modules/Fretboard/FretboardCard';

import Keyboard from './Modules/Keyboard/Keyboard';
import KeyboardCard from './Modules/Keyboard/KeyboardCard';

import Graph from './Modules/Graph/Graph';
import GraphCard from './Modules/Graph/GraphCard';

import Rhythm from './Modules/Rhythm/Rhythm';
import RhythmCard from './Modules/Rhythm/RhythmCard';

import TrueScale from './Modules/TrueScale/TrueScale';
import TrueScaleCard from './Modules/TrueScale/TrueScaleCard';

import HarmonicSeries from './Modules/HarmonicSeries/HarmonicSeries';
import HarmonicSeriesCard from './Modules/HarmonicSeries/HarmonicSeriesCard';

import Chart from './Modules/Chart/Chart';
import ChartCard from './Modules/Chart/ChartCard';

import InputDocsCard from './Modules/InputDocs/InputDocsCard';

import ErrorBoundary from './UI/ErrorBoundary';
import ButtonInput from './UI/ButtonInput/ButtonInput';

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
    Chart,
    ChartCard,
    InputDocsCard,
    Rhythm,
    RhythmCard
}

const UI = {
    ErrorBoundary,
    ButtonInput
}

export default {
    Modules,
    UI
 };