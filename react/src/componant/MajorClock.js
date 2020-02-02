import React from 'react';
import padStart from 'lodash/padStart';


const MajorClock = ({milliseconds = 0, activated = false}) => {
    // const style = {
    //     'fontFamily': 'monospace',
    //     width: 200,
    //     color: 'red'
    // };
    return (
        <React.Fragment>
            <style jsx>{`
                h1 {
                fontFamily: monospace;
                width: 200px;
                color: ${activated ? "red" : "#999"}
                }
            `}</style>
            <h1>{ms2Time(milliseconds)}</h1>
        </React.Fragment>
    );
};

const ms2Time = (milliseconds) => {
    let time;
    const ms = (milliseconds % 1000);
    time = (milliseconds - ms) / 1000;
    const seconds = time % 60;
    time = (time - seconds) / 60;
    const minutes = time % 60;
    const hours = (time - minutes) / 60;

    return padStart(hours, 2, '0') + ":" +
        padStart(minutes, 2, '0') + ":" +
        padStart(seconds, 2, '0') + "." +
        padStart(ms.toString().slice(0, 2), 2, '0');
};

export default MajorClock;