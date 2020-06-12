import React, { useState } from 'react';
import PW from 'play-what';

import Card from '../../UI/Card/Card';
import Fretboard from './Fretboard';
import ConceptInput from '../../UI/ConceptInput/ConceptInput';
import ScalarInput from '../../UI/ScalarInput/ScalerInput';
import SwitchInput from '../../UI/SwitchInput/SwitchInput';
import InputBlock from '../../UI/InputBlock/InputBlock';
import LabeledInput from '../../UI/LabeledInput/LabeledInput';
import useNoteContext, { NoteContextProvider, NoteContextConsumer } from '../../Utils/NoteContext';
import ButtonInput from '../../UI/ButtonInput/ButtonInput';

const PlaybackControls = () => {
    return null;
    const { play, togglePlay, tempo, setTempo, beatIndex } = useNoteContext();
    return (
        <div className='playback-controls'>
            <ButtonInput className='pw-secondary' onClick={togglePlay}>{play ? 'Pause' : 'Play'}</ButtonInput>
            <ScalarInput value={tempo} setValue={setTempo} />
            <div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
        </div>
    );
}

const FretboardCard = ({ defaultOpen, back }) => {

    const [fretLow, setFretLow] = useState(0);
    const [fretHigh, setFretHigh] = useState(12);
    const [showDots, setShowDots] = useState(true);
    const [showFretNumbers, setShowFretNumbers] = useState(true);

    return (
        <Card title="Fretboard" defaultOpen={defaultOpen} back={back}>

            <NoteContextProvider>
                <NoteContextConsumer>
                    {noteContext =>
                        <>
                            <Fretboard
                                fretLow={fretLow}
                                fretHigh={fretHigh}
                                showDots={showDots}
                                showFretNumbers={showFretNumbers}
                            />

                            <PlaybackControls />

                            <ConceptInput
                                keyCenter={{ a: [0, 0], B: [[0, 0]] }}
                                setKeyCenter={null/*k => noteContext.setConcept({ a: k, B: noteContext.concept.B })*/}
                                intervals={[{ a: [0, 0], B: [[0, 0]] }]}
                                setIntervals={null/*i => noteContext.setConcept({ a: noteContext.concept.a, B: i })*/}
                            />
                        </>
                    }
                </NoteContextConsumer>
            </NoteContextProvider>

            <InputBlock title="Fret Range">
                <LabeledInput label="Low Fret">
                    <ScalarInput value={fretLow} setValue={setFretLow} />
                </LabeledInput>
                <LabeledInput label="High Fret">
                    <ScalarInput value={fretHigh} setValue={setFretHigh} />
                </LabeledInput>
            </InputBlock>
            <InputBlock title="Labels">
                <LabeledInput label="Fret Dots">
                    <SwitchInput value={showDots} setValue={setShowDots} />
                </LabeledInput>
                <LabeledInput label="Fret Numbers">
                    <SwitchInput value={showFretNumbers} setValue={setShowFretNumbers} />
                </LabeledInput>
            </InputBlock>
        </Card>
    )
}

export default FretboardCard;