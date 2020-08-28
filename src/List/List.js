import * as React from "react";
import "./List.css";

const List = ({ children, list, viewer, name, ...props }) => {

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals, name } = c;
        return <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} name={name} key={i} />;
    });

    return (
        <div className="list">
            <h3>{name}</h3>
            {concepts}
        </div>
    );
}

export default List;