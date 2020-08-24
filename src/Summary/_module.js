import React from 'react'
import Component from './Summary';
import PW from 'play-what';

export default {
    component: Component,
    forEachNote: ({ concepts, props }) => {
        return concepts.map(n => {
            return {
                component: Component,
                props: { keyCenter: n.a, intervals: n.B, ...props }
            };
        })
    },
    colorBy: props => {
        return ctx => {
            const { note } = ctx;
            const color = PW.api.PW.Color.parseColorProp(props.type, note);
            return color;
        };
    }
};