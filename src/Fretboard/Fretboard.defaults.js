import PW from 'play-what';

export default {
    fretRange: [0, 12],
    tuning: [16, 11, 7, 2, -3, -8],
    colorFn: PW.api.Vector.colorBy({ type: 'order' }),
    textFn: PW.api.Vector.textBy({ type: 'order' }),
    reduced: true,
    intervals: [],
    keyCenter: null
};