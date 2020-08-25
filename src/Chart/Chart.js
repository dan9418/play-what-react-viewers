import * as React from "react";
import List from "../List/List";
//import "./Keyboard.css";

const Chart = ({ children, chart, viewer, ...props }) => {

    const rowStyles = {
        width: '100%'
    };

    const sections = chart.sections.map(s => {
        return (
            <div className="section">
                <h3>Section</h3>
                <div className="concept-list">
                    <List list={s.concepts} viewer={viewer} />
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