import Component from './Summary';
import PW from 'play-what';

export default {
    component: Component,
    colorBy: props => {
        return ctx => {
            const { note } = ctx;
            const color = PW.api.PW.Color.parseColorProp(props.type, note);
            return color;
        };
    }
};