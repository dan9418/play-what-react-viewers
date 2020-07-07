import React from 'react';
import './Chart.css';
import PW from 'play-what';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.B };
const DEFAULT_ROW = [DEFAULT_COL];

const Col = props => {
    const { a, B, t, sectionIndex, rowIndex, colIndex, setPosition, position } = props;
    // const notes = PW.Theory.addVectorsBatch(a, B);

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);
    //const name = `${tonic} ${preset.id}`

    const style = { flexGrow: t };

    const [s, r, c] = position;
    const isActive = sectionIndex === s && rowIndex === r && colIndex === c;
    const setPositionToThis = () => setPosition([sectionIndex, rowIndex, colIndex]);

    return (
        <div className={`col ${isActive ? 'pw-accent' : 'pw-lighter'}`} style={style} onClick={setPositionToThis}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Row = props => {
    const { cols, sectionIndex, rowIndex, setPosition, position } = props;
    return (
        <div className={`row ${null}`}>
            {cols.map((c, i) => <Col key={i} sectionIndex={sectionIndex} rowIndex={rowIndex} colIndex={i} a={c.a} B={c.B} t={c.t} setPosition={setPosition} position={position} />)}
        </div>
    );
};

const Section = props => {
    const { name, rows, sectionIndex, setPosition, position } = props;
    return (
        <div className={`section ${null}`}>
            <div className="name">{name}</div>
            {rows.map((r, i) => <Row key={i} sectionIndex={sectionIndex} rowIndex={i} cols={r.cols} setPosition={setPosition} position={position} />)}
        </div>
    );
};

const Chart = ({ source, position, setPosition }) => {
    return (
        <div className="chart">
            {source.sections.map((s, i) => <Section key={i} sectionIndex={i} name={s.name} rows={s.rows} setPosition={setPosition} position={position} />)}
        </div>
    );
}

export default Chart;