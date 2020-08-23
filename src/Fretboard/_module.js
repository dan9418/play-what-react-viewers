import Component from './Fretboard';
import Defaults from './Fretboard.defaults';
import * as api from './Fretboard.api';
import PW from 'play-what';

const parseColorProp = (color, note) => {
    if (!color) return null;

    switch (color.type) {
        case 'degree':
            return note ? PW.api.PW.Color.Scheme.Degree[`d${note.d + 1}`] : null;
        default:
            return null;
    }
}

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

            return {
                text: note ? note.d : '',
                color
            }
        };
    }
};

export default Fretboard;