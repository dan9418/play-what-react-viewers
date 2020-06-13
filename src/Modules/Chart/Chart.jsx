import React from 'react';
import './Chart.css';
import PW from 'play-what';
import useNoteContext from '../../Utils/NoteContext';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.intervals };
const DEFAULT_ROW = [DEFAULT_COL];

const Col = props => {
    const { a, B, t, sectionIndex, rowIndex, colIndex } = props;
    const notes = PW.Theory.addVectorsBatch(a, B);
    const name = PW.Theory.getNoteName(notes[0]);
    const style = { flexGrow: t };

    const { sectionIndex: s, rowIndex: r, colIndex: c, setPosition } = useNoteContext();
    const isActive = sectionIndex === s && rowIndex === r && colIndex === c;
    const setPositionToThis = () => setPosition(sectionIndex, rowIndex, colIndex);

    return (
        <div className={`col ${isActive ? 'pw-accent' : 'pw-lighter'}`} style={style} onClick={setPositionToThis}>
            {name}
        </div>
    );
};

const getCols = (cols, sectionIndex, rowIndex) => {
    return cols.map((c, i) => <Col key={i} sectionIndex={sectionIndex} rowIndex={rowIndex} colIndex={i} a={c.a} B={c.B} t={c.t} />);
};

const Row = props => {
    const { cols, sectionIndex, rowIndex } = props;
    return (
        <div className={`row ${null}`}>
            {getCols(cols, sectionIndex, rowIndex)}
        </div>
    );
};

const getRows = (rows, sectionIndex) => {
    return rows.map((r, i) => <Row key={i} sectionIndex={sectionIndex} rowIndex={i} cols={r.cols} />);
};

const Section = props => {
    const { name, rows, sectionIndex } = props;
    return (
        <div className={`section ${null}`}>
            <div className="name">{name}</div>
            {getRows(rows, sectionIndex)}
        </div>
    );
};

const getSections = sections => {
    return sections.map((s, i) => <Section key={i} sectionIndex={i} name={s.name} rows={s.rows} />);
};

const Chart = props => {
    const noteContext = useNoteContext();
    return (
        <div className="chart">
            {getSections(noteContext.song.sections)}
        </div>
    );
}

export default Chart;