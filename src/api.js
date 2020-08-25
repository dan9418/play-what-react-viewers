import _Fretboard from './Fretboard/_module';
import _Summary from './Summary/_module';
import _Chart from './Chart/_module';
import _List from './List/_module';

export const Fretboard = _Fretboard;
export const Summary = _Summary;
export const Chart = _Chart;
export const List = _List;

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
