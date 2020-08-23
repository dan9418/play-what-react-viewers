import Component from './Fretboard';
import Defaults from './Fretboard.defaults';
import * as api from './Fretboard.api';

const Fretboard = {
    component: Component,
    mapBy: props => {

        return ctx => {
            const { stringIndex, fretIndex } = ctx;
            const noteIndex = api.STANDARD_TUNING[stringIndex] + fretIndex;
            return {
                text: noteIndex
            }
        };
    }
};

export default Fretboard;