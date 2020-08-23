import Component from './Fretboard';
import Defaults from './Fretboard.defaults';
import * as api from './Fretboard.api';
import PW from 'play-what';

const parseColorProp = (type, note) => {
    switch (type) {
        case 'binary':
            return note ? PW.api.PW.Color.Scheme.Binary.active : PW.api.PW.Color.Scheme.Binary.inacitve;
        case 'degree':
            return note ? PW.api.PW.Color.Scheme.Degree[`d${note.d + 1}`] : null;
        case 'pitchClass':
            return note ? PW.api.PW.Color.Scheme.PitchClass[`pc${note.p + 1}`] : null;
        default:
            return null;
    }
};

const parseTextProp = (type, note) => {
    switch (type) {
        case 'degree':
            return note ? note.d : '';
        case 'pitchClass':
            return note ? note.p : '';
        default:
            return '';
    }
};

const Fretboard = {
    component: Component,
    colorBy: props => {
        return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const color = parseColorProp(props.type, note);
            return color;
        };
    },
    textBy: props => {
        return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const text = parseTextProp(props.type, note);
            return text;
        };
    }
};

export default Fretboard;