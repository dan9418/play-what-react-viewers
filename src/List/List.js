import * as React from "react";
//import "./Keyboard.css";

const List = ({ children, list, viewer, ...props }) => {

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals } = c;
        return (
            <div className="concept">
                <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} />
            </div>
        );
    });

    return (
        <div className="list">
            {concepts}
        </div>
    );
}

export default List;