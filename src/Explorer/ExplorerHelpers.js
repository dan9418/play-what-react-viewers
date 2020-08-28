import * as React from "react";
import PW from 'play-what';
import "./Explorer.css";

export const Frequency = ({ f }) => <div className="frequency">{`${f} Hz`}</div>;
export const Name = ({ name }) => <div className="name">{`${name}`}</div>;
export const Pod = ({ p, d }) => <div className="pod">{`[${p}, ${d}]`}</div>;
export const PitchIndex = ({ pitchIndex }) => <div className="pitchIndex">{`(${pitchIndex})`}</div>;

export const Note = ({ pod, ctx, colorFn }) => {
    const pitchIndex = pod.p;
    const name = PW.api.PW.Vector.Note.getName(ctx);
    const interval = PW.api.PW.Vector.Interval.getName(ctx);
    const f = Math.round(PW.api.PW.Tuning.getFrequency(pod.p));
    const colorStyles = colorFn(ctx)

    return (
        <div className='note' style={colorStyles}>
            <Name name={name} />
            <Pod {...pod} />
            <PitchIndex pitchIndex={pitchIndex} />
            <Frequency f={f} />
        </div>
    );
};

export const Interval = ({ pod, ctx, colorFn }) => {
    const name = PW.api.PW.Vector.Interval.getName(ctx);
    const pitchIndex = pod.p;
    const styles = colorFn(ctx);

    return (
        <div className='interval' style={styles}>
            <Name name={name} />
            <Pod {...pod} />
            <PitchIndex pitchIndex={pitchIndex} />
        </div>
    );
};

export const KeyCenter = ({ pod, ctx, colorFn }) => {
    const pitchIndex = pod.p;
    const name = PW.api.PW.Vector.Note.getName(ctx);
    const f = Math.round(PW.api.PW.Tuning.getFrequency(pod.p));
    const styles = colorFn(ctx);

    return (
        <div className='key-center' style={styles}>
            <Name name={name} />
            <Pod {...pod} />
            <PitchIndex pitchIndex={pitchIndex} />
            <Frequency f={f} />
        </div>
    );
};