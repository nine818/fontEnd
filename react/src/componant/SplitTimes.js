import React from 'react';
import MajorClock from "./MajorClock";
const SplitTimes = ({splits = [], activated = false}) => {
    const style = {
        display: 'flex',
        flexWrap: 'wrap',
    };
    return(
        <div style={style}>
            {splits.map((item, index) => (
                <MajorClock key={index} milliseconds={item} activated={activated}/>

            ))}
        </div>
    );
};

export default SplitTimes;