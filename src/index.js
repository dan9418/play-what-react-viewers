import Fretboard from './Modules/Fretboard/FretboardController';
import Keyboard from './Modules/Keyboard/KeyboardController';

import ErrorBoundary from './UI/ErrorBoundary';
import ButtonInput from './UI/ButtonInput/ButtonInput';
import Dropdown from './UI/Dropdown/Dropdown';
import ConceptInput from './UI/ConceptInput/ConceptInput';

import './index.css';

const Modules = {
    Fretboard,
    Keyboard
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