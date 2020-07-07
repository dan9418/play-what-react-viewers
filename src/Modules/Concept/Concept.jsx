import React from 'react';
import './Concept.css';
import PW from 'play-what';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const Concept2 = props => {
    const { a, B, t } = props;

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);

    const style = { flexGrow: t };

    const setPositionToThis = () => setPosition(index);

    return (
        <div className='progression pw-lighter' style={style} onClick={setPositionToThis}>
            <div>
                <span className="tonic">{tonic}</span>
                <span className="preset">{preset.id}</span>
            </div>
        </div>
    );
};

const Concept = ({ source }) => {
    return (
        <div className="concept">
            <Concept2 a={source.a} B={source.B} />
        </div>
    );
}

export default Concept;