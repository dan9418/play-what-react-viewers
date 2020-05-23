import React, { useState } from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.intervals };
const DEFAULT_ROW = [DEFAULT_COL];

const AUTUMN_LEAVES = [
    // A
    [
        {
            a: PW.Presets.KEY_CENTERS.C,
            B: PW.Presets.CHORD.Min7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.F,
            B: PW.Presets.CHORD.Dom7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Bb,
            B: PW.Presets.CHORD.Maj7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Eb,
            B: PW.Presets.CHORD.Maj7.intervals
        }
    ],
    [
        {
            a: PW.Presets.KEY_CENTERS.A,
            B: PW.Presets.CHORD.HalfDim7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.D,
            B: PW.Presets.CHORD.Dom7b13.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.G,
            B: PW.Presets.CHORD.Min6.intervals
        }
    ],
    // A
    [
        {
            a: PW.Presets.KEY_CENTERS.C,
            B: PW.Presets.CHORD.Min7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.F,
            B: PW.Presets.CHORD.Dom7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Bb,
            B: PW.Presets.CHORD.Maj7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Eb,
            B: PW.Presets.CHORD.Maj7.intervals
        }
    ],
    [
        {
            a: PW.Presets.KEY_CENTERS.A,
            B: PW.Presets.CHORD.HalfDim7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.D,
            B: PW.Presets.CHORD.Dom7b13.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.G,
            B: PW.Presets.CHORD.Maj7.intervals
        }
    ],
    // B
    [
        {
            a: PW.Presets.KEY_CENTERS.A,
            B: PW.Presets.CHORD.HalfDim7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.D,
            B: PW.Presets.CHORD.Dom7b13.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.G,
            B: PW.Presets.CHORD.Min6.intervals
        }
    ],
    [
        {
            a: PW.Presets.KEY_CENTERS.C,
            B: PW.Presets.CHORD.Min7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.F,
            B: PW.Presets.CHORD.Dom7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Bb,
            B: PW.Presets.CHORD.Maj7.intervals
        }
    ],
    // C
    [
        {
            a: PW.Presets.KEY_CENTERS.A,
            B: PW.Presets.CHORD.HalfDim7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.D,
            B: PW.Presets.CHORD.Dom7b13.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.G,
            B: PW.Presets.CHORD.Min7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.C,
            B: PW.Presets.CHORD.Dom7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.F,
            B: PW.Presets.CHORD.Min7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.Bb,
            B: PW.Presets.CHORD.Dom7.intervals
        }
    ],
    [
        {
            a: PW.Presets.KEY_CENTERS.A,
            B: PW.Presets.CHORD.HalfDim7.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.D,
            B: PW.Presets.CHORD.Dom7b13.intervals
        },
        {
            a: PW.Presets.KEY_CENTERS.G,
            B: PW.Presets.CHORD.Min7.intervals
        }
    ]
]

const ConceptChartCol = props => {
    const { keyCenter, setKeyCenter, intervals, setIntervals } = props;
    const { col, setCol } = props;
    const { a, B } = col;
    const [editing, setEditing] = useState(false);
    const keyName = PW.Theory.getNoteName(a);
    const id = PW.Theory.findPreset(B).id;
    const name = `${keyName} ${id}`;

    const setKeyCenterLocal = k => setCol({ a: k, B: B });
    const setIntervalsLocal = i => setCol({ a: a, B: i });

    const isActive = PW.Theory.areIntervalEqual(keyCenter, a) && PW.Theory.areIntervalsEqual(intervals, B);

    const setConcept = () => {
        setKeyCenter(a);
        setIntervals(B);
    };

    const removeConcept = () => setCol(null);

    return (
        <div className="concept-chart-col">
            <div className={`name pw-hov ${isActive ? 'pw-accent' : 'pw-light'}`} onClick={() => setEditing(!editing)}>
                {name}
            </div>
            <div>
                <div className="edit pw-hov" onClick={setConcept}>
                    Set
                </div>
                <div className="remove pw-hov" onClick={removeConcept}>
                    Remove
                </div>
            </div>
            {
                editing &&
                <div className="edit-panel pw-secondary">
                    <ConceptPresetInput
                        keyCenter={a}
                        setKeyCenter={setKeyCenterLocal}
                        intervals={B}
                        setIntervals={setIntervalsLocal}
                    />
                </div>
            }
        </div >
    );
}

const ConceptChartRow = props => {
    const { row, setRow } = props;
    const colComponents = row.map((c, i) => {
        const setCol = col => setRow([...row.slice(0, i), col, ...row.slice(i + 1)]);
        return c ? <ConceptChartCol key={i} col={c} setCol={setCol} {...props} /> : null;
    });
    return (
        <div className="concept-chart-row pw-medium">
            {colComponents}
            <ButtonInput onClick={() => setRow([...row, DEFAULT_COL])}>+</ButtonInput>
        </div>
    );
}

const ConceptChartInput = props => {
    const [rows, setRows] = useState(AUTUMN_LEAVES);

    const rowComponents = rows.map((r, i) => {
        const setRow = row => setRows([...rows.slice(0, i), row, ...rows.slice(i + 1)]);
        return <ConceptChartRow key={i} row={r} setRow={setRow} {...props} />;
    });

    return (
        <div className="concept-chart-input">
            {rowComponents}
            <ButtonInput onClick={() => setRows([...rows, DEFAULT_ROW])}>+</ButtonInput>
        </div>
    );
}

export default ConceptChartInput;