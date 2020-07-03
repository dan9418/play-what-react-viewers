import React from 'react';
import './Concept.css';
import PW from 'play-what';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';

const Col = props => {
    const { a, B, t } = props;

    const tonic = PW.Theory.getNoteName(a);
    const preset = PW.Theory.findPreset(B);

    const style = { flexGrow: t };

    const setPositionToThis = () => setPosition(index);

    return (
        <div className='col pw-lighter' style={style} onClick={setPositionToThis}>
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
            <Col a={source.a} B={source.B} />
        </div>
    );
}

export default Concept;