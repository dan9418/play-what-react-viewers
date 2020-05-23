import React, { useState } from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';

const ConceptChartCol = ({ col, setCol }) => {
    const [editing, setEditing] = useState(false);
    const { a, B } = col;
    const keyCenter = PW.Theory.getNoteName(a);
    const id = PW.Theory.findPreset(B).id;
    const name = `${keyCenter} ${id}`;

    const setKeyCenter = keyCenter => setCol({ a: keyCenter, B: B });
    const setIntervals = intervals => setCol({ a: a, B: intervals });

    return (
        <div className="concept-chart-col">
            <div className="name">
                {name}
            </div>
            <div>
                <div className="edit pw-hov" onClick={() => setEditing(!editing)}>
                    Edit
                </div>
                <div className="remove pw-hov">
                    Remove
                </div>
            </div>
            {editing &&
                <div className="edit-panel pw-secondary">
                    <ConceptPresetInput
                        keyCenter={a}
                        setKeyCenter={setKeyCenter}
                        intervals={B}
                        setIntervals={setIntervals}
                    />
                </div>
            }
        </div>
    );
}

const ConceptChartRow = ({ row, setRow }) => {
    const colComponents = row.map((c, i) => {
        const setCol = col => setRow([...row.slice(0, i), col, ...row.slice(i + 1)]);
        return <ConceptChartCol key={i} col={c} setCol={setCol} />;
    });
    return (
        <div className="concept-chart-row pw-medium">
            {colComponents}
            <ButtonInput onClick={() => null}>+</ButtonInput>
        </div>
    );
}

const ConceptChartInput = props => {
    const DEFAULT_COL = { a: { p: 0, d: 2 }, B: [{ p: 0, d: 0 }] };
    const DEFAULT_ROW = [DEFAULT_COL]
    const [rows, setRows] = useState([DEFAULT_ROW]);

    const rowComponents = rows.map((r, i) => {
        const setRow = row => setRows([...rows.slice(0, i), row, ...rows.slice(i + 1)]);
        return <ConceptChartRow key={i} row={r} setRow={setRow} />;
    });

    return (
        <div className="concept-chart-input">
            {rowComponents}
            <ButtonInput onClick={() => setRows([...rows, DEFAULT_ROW])}>+</ButtonInput>
        </div>
    );
}

export default ConceptChartInput;