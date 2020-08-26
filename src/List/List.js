import * as React from "react";
//import "./Keyboard.css";

const List = ({ children, list, viewer, name, ...props }) => {

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals, name } = c;
        return (
            <div className="concept" key={i}>
                <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} name={name} />
            </div>
        );
    });

    return (
        <div className="list">
            <h3>{name}</h3>
            {concepts}
        </div>
    );
}

export default List;