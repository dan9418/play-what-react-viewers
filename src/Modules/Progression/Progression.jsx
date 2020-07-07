import React from 'react';
import './Progression.css';
import PW from 'play-what';

const Concept = props => {
    const { a, B, t, index, setPosition, position } = props;

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);

    const style = { flexGrow: t };

    const isActive = position === index;
    const setPositionToThis = () => setPosition(index);

    return (
        <div className={`progression ${isActive ? 'pw-accent' : 'pw-lighter'}`} style={style} onClick={setPositionToThis}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Progression = ({ source, position, setPosition }) => {
    return (
        <div className="progression">
            {source.progression.map((s, i) => {
                return <Concept a={s.a} B={s.B} index={i} position={position} setPosition={setPosition} />
            })}
        </div>
    );
}

export default Progression;