import Component from './Summary';

export default {
    component: Component,
    colorBy: props => {
        /*return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const color = parseColorProp(props.type, note);
            return color;
        };*/
    },
    textBy: props => {
        /*return ctx => {
            const { tuning, stringIndex, fretRange, fretIndex, noteIndex, note } = ctx;
            const text = parseTextProp(props.type, note);
            return text;
        };*/
    }
};