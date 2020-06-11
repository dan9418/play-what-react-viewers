import React from 'react';
import './Chart.css';
import PW from 'play-what';

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

const DEFAULT_PROPS = {
    sections: [
        {
            name: 'A',
            rows: [
                {
                    cols: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 100
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 200
                        }
                    ]
                },
                {
                    cols: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 200
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 100
                        }
                    ]
                }
            ]
        },
        {
            name: 'B',
            rows: [
                {
                    cols: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 50
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 50
                        }
                    ]
                },
                {
                    cols: [
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 25
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 25
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.C,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 25
                        },
                        {
                            a: PW.Presets.KEY_CENTERS.A,
                            B: PW.Presets.CHORD.Maj7.intervals,
                            t: 25
                        }
                    ]
                }
            ]
        }
    ]
};

const Chart = props => {
    const config = { ...DEFAULT_PROPS, ...props };

    return (
        <div className="chart">
            {getSections(config.sections)}
        </div>
    );
}

export default Chart;