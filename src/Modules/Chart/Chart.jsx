import React from 'react';
import './Chart.css';
import PW from 'play-what';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.B };
const DEFAULT_ROW = [DEFAULT_COL];

const Concept = props => {
    const { a, B, t, sectionIndex, rowIndex, conceptIndex, setPosition, position } = props;
    // const notes = PW.Theory.addVectorsBatch(a, B);

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);
    //const name = `${tonic} ${preset.id}`

    const style = { flexGrow: t };

    const [s, r, c] = position !== null ? position.length ? position : [0, 0, position] : [0, 0, 0];
    const isActive = sectionIndex === s && rowIndex === r && conceptIndex === c;
    const setPositionToThis = position != null ? (position.length ? () => setPosition([sectionIndex, rowIndex, conceptIndex]) : () => setPosition(conceptIndex)) : () => null;

    return (
        <div className={`concept ${isActive ? 'pw-accent' : 'pw-lighter'}`} style={style} onClick={setPositionToThis}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Progression = props => {
    const { progression, sectionIndex, rowIndex, setPosition, position } = props;
    return (
        <div className={`progression ${null}`}>
            {progression.map((c, i) => <Concept key={i} sectionIndex={sectionIndex} rowIndex={rowIndex} conceptIndex={i} a={c.a} B={c.B} t={c.t} setPosition={setPosition} position={position} />)}
        </div>
    );
};

const Section = props => {
    const { name, rows, sectionIndex, setPosition, position } = props;
    return (
        <div className={`section ${null}`}>
            <div className="name">{name}</div>
            {rows.map((r, i) => <Progression key={i} sectionIndex={sectionIndex} rowIndex={i} progression={r.progression} setPosition={setPosition} position={position} />)}
        </div>
    );
};

const Chart = ({ source, position, setPosition, inputModeId }) => {
    return (
        <div className="chart">
            {inputModeId === 'chart' && source.sections.map((s, i) => <Section key={i} sectionIndex={i} name={s.name} rows={s.rows} setPosition={setPosition} position={position} />)}
            {inputModeId === 'progression' && <Progression sectionIndex={0} rowIndex={0} progression={source.progression} setPosition={setPosition} position={position} />}
            {inputModeId === 'concept' && false && <Concept sectionIndex={0} rowIndex={0} conceptIndex={0} a={source.a} B={source.B} t={source.t} setPosition={() => null} position={null} />}
        </div>
    );
}

export default Chart;