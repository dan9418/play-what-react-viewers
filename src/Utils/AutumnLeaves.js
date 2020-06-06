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

export const AUTUMN_LEAVES_2 = {
    name: 'Autumn Leaves',
    defaults: {
        a: { p: 0, d: 0 },
        b: [],
        i: 0,
        x: 4,
        y: 4,
        q: 2
    },
    sections: [
        {
            name: 'A',
            bars: [
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Min7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.F,
                            B: PW.Presets.CHORD.Dom7.intervals
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Bb,
                            B: PW.Presets.CHORD.Maj7.intervals

                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Eb,
                            B: PW.Presets.CHORD.Maj7.intervals

                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.HalfDim7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.D,
                            B: PW.Presets.CHORD.Dom7b9.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min6.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Maj7.intervals,
                        }
                    ]
                }
            ]
        },
        {
            name: 'A\'',
            bars: [
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Min7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.F,
                            B: PW.Presets.CHORD.Dom7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Bb,
                            B: PW.Presets.CHORD.Maj7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Eb,
                            B: PW.Presets.CHORD.Maj7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.HalfDim7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.D,
                            B: PW.Presets.CHORD.Dom7b9.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min6.intervals,
                            x: 8
                        }
                    ]
                },
                null
            ]
        },
        {
            name: 'B',
            bars: [
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.HalfDim7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.D,
                            B: PW.Presets.CHORD.Dom7b9.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min6.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min6.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Min7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.F,
                            B: PW.Presets.CHORD.Dom7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Bb,
                            B: PW.Presets.CHORD.Maj7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.Eb,
                            B: PW.Presets.CHORD.Maj7.intervals,
                        }
                    ]
                },
            ]
        },
        {
            name: 'C',
            bars: [
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.HalfDim7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.D,
                            B: PW.Presets.CHORD.Dom7b9.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min7.intervals,
                            x: 2
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Dom7.intervals,
                            i: 2,
                            x: 2
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.F,
                            B: PW.Presets.CHORD.Min7.intervals,
                            x: 2
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.Bb,
                            B: PW.Presets.CHORD.Dom7.intervals,
                            i: 2,
                            x: 2
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.HalfDim7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.D,
                            B: PW.Presets.CHORD.Dom7b9.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min7.intervals,
                        }
                    ]
                },
                {
                    pulses: [
                        {
                            a: PW.Presets.KEY_CENTERS.G,
                            B: PW.Presets.CHORD.Min7.intervals,
                        }
                    ]
                }
            ]
        }
    ]
};

export default AUTUMN_LEAVES;