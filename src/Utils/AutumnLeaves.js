import PW from 'play-what';



const AUTUMN_LEAVES = {
    name: 'Autumn Leaves',
    sections: [
        {
            name: 'A',
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                }
            ]
        },
        {
            name: 'A\'',
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                    beats: 8
                }
            ]
        },
        {
            name: 'B',
            pulses: [
                {
                    section: 'B',
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                    beats: 4
                },
            ]
        },
        {
            name: 'C',
            pulses: [
                {
                    section: 'C',
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    beats: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    beats: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 4
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                    beats: 4
                }
            ]
        }
    ]
};

const AUTUMN_LEAVES_2 = {
    name: 'Autumn Leaves',
    sections: [
        {
            name: 'A',
            defaults: {
                x: 4,
                y: 4
            },
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Maj7.intervals,
                }
            ]
        },
        {
            name: 'A\'',
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                    x: 8
                }
            ]
        },
        {
            name: 'B',
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min6.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Min7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Dom7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.Eb,
                    B: PW.Presets.CHORD.Maj7.intervals,
                },
            ]
        },
        {
            name: 'C',
            pulses: [
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                    x: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.C,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    x: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.F,
                    B: PW.Presets.CHORD.Min7.intervals,
                    x: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.Bb,
                    B: PW.Presets.CHORD.Dom7.intervals,
                    x: 2
                },
                {
                    a: PW.Presets.KEY_CENTERS.A,
                    B: PW.Presets.CHORD.HalfDim7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.D,
                    B: PW.Presets.CHORD.Dom7b9.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                },
                {
                    a: PW.Presets.KEY_CENTERS.G,
                    B: PW.Presets.CHORD.Min7.intervals,
                }
            ]
        }
    ]
};

export default AUTUMN_LEAVES;