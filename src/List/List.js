import * as React from "react";
//import "./Keyboard.css";

const Chart = ({ children, list, viewer, ...props }) => {

    const rowStyles = {
        width: '100%'
    };

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals } = c;
        return (
            <div className="concept">
                <h4>{`Concept ${i}`}</h4>
                <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} />
            </div>
        );
    });

    return (<div className="list">
        {concepts}
    </div>
    );
}

export default Chart;