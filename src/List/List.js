import * as React from "react";
import "./List.css";

const List = ({ children, list, viewer, name, ...props }) => {

    const [open, setOpen] = React.useState(true);

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals, name } = c;
        return (
            <>
                <h4>{name}</h4>
                <div className="subcard">
                    <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} name={name} key={i} />
                </div>
            </>
        );
    });

    return (
        <>
            <h3 onClick={() => setOpen(!open)}>{name}</h3>
            <div className="card">
                {open && concepts}
            </div>
        </>
    );
}

export default List;