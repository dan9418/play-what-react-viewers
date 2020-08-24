import * as React from "react";
//import "./Keyboard.css";

const Chart = ({ children, chart, viewer, ...props }) => {

    const rowStyles = {
        width: '100%'
    };

    const sections = chart.sections.map(s => {
        const concepts = s.concepts.map(c => {
            const Comp = viewer.component;
            const { a: keyCenter, B: intervals } = c;
            return (
                <div className="concept">
                    <h4>Concept</h4>
                    <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} />
                </div>
            );
        })
        return (
            <div className="section">
                <h3>Section</h3>
                <div className="concept-list">
                    {concepts}
                </div>
            </div>
        );
    })

    return (
        <div className='chart' style={rowStyles}>
            {sections}
        </div>
    );
}

export default Chart;