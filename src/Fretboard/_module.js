import Component from './Fretboard';
import Defaults from './Fretboard.defaults';
import * as api from './Fretboard.api';
import PW from 'play-what';

const Fretboard = {
    component: Component,
    colorBy: props => {
        return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const color = PW.api.PW.Color.parseColorProp(props.type, note);
            return color;
        };
    },
    textBy: props => {
        return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const text = PW.api.PW.Text.parseTextProp(props.type, note);
            return text;
        };
    }
};

export default Fretboard;