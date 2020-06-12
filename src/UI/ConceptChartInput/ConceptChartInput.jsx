import React from 'react';
import './ConceptChartInput.css';
import PW from 'play-what';
import AUTUMN_LEAVES from '../../Utils/AutumnLeaves';

const DEFAULT_COL = { a: PW.Presets.KEY_CENTERS.C, B: PW.Presets.QUICK_MODE.Ionian.intervals };
const DEFAULT_ROW = [DEFAULT_COL];

const Col = props => {
    const { a, B, t } = props;
    const notes = PW.Theory.addVectorsBatch(a, B);
    const name = PW.Theory.getNoteName(notes[0]);
    const style = { flexGrow: t };

    return (
        <div className={`col ${null}`} style={style}>
            {name}
        </div>
    );
};

const getCols = cols => {
    return cols.map((c, i) => <Col key={i} a={c.a} B={c.B} t={c.t} />);
};

const Row = props => {
    const { cols } = props;
    return (
        <div className={`row ${null}`}>
            {getCols(cols)}
        </div>
    );
};

const getRows = rows => {
    return rows.map((r, i) => <Row key={i} cols={r.cols} />);
};

const Section = props => {
    const { name, rows } = props;
    return (
        <div className={`section ${null}`}>
            <div className="name">{name}</div>
            {getRows(rows)}
        </div>
    );
};

const getSections = sections => {
    return sections.map((s, i) => <Section key={i} name={s.name} rows={s.rows} />);
};

const DEFAULT_PROPS = AUTUMN_LEAVES;

const ConceptChartInput = props => {
    const config = { ...DEFAULT_PROPS, ...props };

    return (
        <div className="chart">
            {getSections(config.sections)}
        </div>
    );
}

export default ConceptChartInput;