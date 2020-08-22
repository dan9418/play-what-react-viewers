import _Fretboard from './Fretboard/_module';
import _Grid from './Grid/_module';
import _Summary from './Summary/_module';

export const Fretboard = {
    component: _Fretboard.Viewer,
    from: (args) => {
        const config = { ..._Fretboard.Defaults, ...args };
        const {
            fretRange, tuning, labelFn, styleFn
        } = config;
        const [l, h] = fretRange || [0, 24];

        const strings = [];
        for (let s = 0; s < tuning.length; s++) {
            const frets = [];
            for (let f = l; f <= h; f++) {
                const context = {
                    strNum: s,
                    fretNum: f,
                    fretRange,
                    tuning,
                    noteIndex: tuning[s] + f
                };
                frets.push({
                    children: labelFn ? labelFn(context) : null,
                    style: styleFn ? styleFn(context) : {}
                });
            }
            strings.push(frets);
        }
        return {
            component: _Fretboard.Viewer,
            props: {
                fretMap: strings
            }
        };
    }
};

export const Row = {
    component: _Grid.Row.Viewer,
    from: (args) =>
        // const config = { ...Fretboard.Defaults, ...args };
        // const { fretRange, tuning, labelFn, styleFn } = config;
        ({
            component: _Grid.Row.Viewer,
            props: {
                // fretMap: strings
            }
        })
};

const buildNoteSummary = (pod) => {
    const name = '';//Note.getName({ pod });
    const { p, d } = pod;
    return {
        name,
        vector: [p, d]
    };
};

export const Summary = {
    component: _Summary.Viewer,
    from: ({ pods }) => {
        return {
            component: _Summary.Viewer,
            props: {
                notes: pods.map((p) => buildNoteSummary(p))
            }
        };
    }
};

export const repeat = ({ n, content }) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        // result.push(Source.parse(content));
    }
    return {
        children: result
    };
};

export const element = {
    from: ({ component, children, props }) => {
        if (typeof component !== 'string') throw ('only string component defs allowed');
        return {
            component,
            children,
            props
        };
    }
};
