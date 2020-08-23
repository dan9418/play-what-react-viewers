import Component from './Fretboard';
import Defaults from './Fretboard.defaults';
import * as api from './Fretboard.api';
import PW from 'play-what';

const parseColorProp = (color, note) => {
    if (!color) return null;

    switch (color.type) {
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

const parseTextProp = (text, note) => {
    if (!text) return '';

    switch (text.type) {
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
    mapBy: props => {
        return ctx => {
            const { stringIndex, fretIndex } = ctx;
            const noteIndex = api.STANDARD_TUNING[stringIndex] + fretIndex;

            // get note
            const note = PW.api.PW.Matrix.findVectorWithPitch({
                matrix: props.notes,
                pitch: noteIndex
            })

            // get color
            const color = parseColorProp(props.color, note);

            // get text
            const text = parseTextProp(props.text, note);

            return {
                text,
                color
            }
        };
    }
};

export default Fretboard;