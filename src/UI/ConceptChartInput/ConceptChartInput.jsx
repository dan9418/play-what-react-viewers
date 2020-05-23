import React, { useState } from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import ButtonInput from '../ButtonInput/ButtonInput';
import ConceptPresetInput from '../ConceptPresetInput/ConceptPresetInput';

const ConceptChartCol = props => {
    const { a, B } = props.col;
    const name = PW.Theory.findPreset(B).name;
    const [editing, setEditing] = useState(false);

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
                        intervals={B}
                    />
                </div>
            }
        </div>
    );
}

const ConceptChartRow = props => {
    return (
        <div className="concept-chart-row pw-medium">
            {props.row.map((c, i) => {
                return <ConceptChartCol key={i} {...props} col={c} />;
            })}
            <ButtonInput onClick={() => null}>+</ButtonInput>
        </div>
    );
}

const ConceptChartInput = props => {
    const DEFAULT_COL = { a: { p: 0, d: 2 }, B: [{ p: 0, d: 0 }] };
    const DEFAULT_ROW = [DEFAULT_COL]
    const [rows, setRows] = useState([DEFAULT_ROW]);

    return (
        <div className="concept-chart-input">
            {rows.map((c, i) => {
                return <ConceptChartRow key={i} {...props} row={rows[i]} />;
            })}
            <ButtonInput onClick={() => setRows([...rows, DEFAULT_ROW])}>+</ButtonInput>
        </div>
    );
}

export default ConceptChartInput;