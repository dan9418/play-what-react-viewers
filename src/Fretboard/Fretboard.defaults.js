import PW from 'play-what';

export default {
    fretRange: [0, 12],
    tuning: [16, 11, 7, 2, -3, -8],
    colorFn: PW.api.PW.Vector.colorBy({ type: 'degree' }),
    textFn: PW.api.PW.Vector.textBy({ type: 'degree' }),
    reduced: true,
    intervals: [],
    keyCenter: null
};