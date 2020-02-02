import React from 'react';
import MajorClock from "./componant/MajorClock";
import ControlButtons from "./componant/ControlButton";
import SplitTimes from "./componant/SplitTimes";


class StopWatch extends React.Component {
    // constructor() {
    //     super(...arguments);
    //     this.state = {
    //       isStarted: false,
    //       startTime: null,
    //       currentTime: null,
    //       splits:[]
    //     };
    // }
    state = {
        isStarted: false,
        stopType: 1,
        startTime: 0,
        currentTime: 0,
        splits: [],
        count:0
    };
    onSelect = (e) => {
        this.setState({
            stopType: e.target.value
        });
    };
    onStart = () => {
        //不会同步更新
        this.setState({count:this.state.count +1});
        this.setState({count:this.state.count +1});
        this.setState({count:this.state.count +1});
        this.setState({count:this.state.count +1});
        this.setState({
            isStarted: true,
            startTime: new Date().getTime(),
            currentTime: this.useTime ? new Date().getTime() + this.useTime : new Date().getTime()
        });
        this.intervalHandle = setInterval(() => {
            this.setState({
                currentTime: this.useTime ? new Date().getTime() + this.useTime : new Date().getTime(),
            },);
        }, 10);
    };

    onPause = () => {
        clearInterval(this.intervalHandle);
        const {startTime, currentTime} = this.state;
        this.useTime = currentTime - startTime;
        this.setState({
            isStarted: false,
        });
    };
    onReset = () => {
        this.setState({
            startTime: 0,
            currentTime: 0,
            splits: [],
        });
        this.useTime = 0;
    };
    onSplit = () => {

        const {startTime, stopType} = this.state;

        let newLap = new Date().getTime() - startTime;

        if (stopType === 1) {
            const splits = [...this.state.splits, newLap];
            if (splits.length > 1) {
                newLap = new Date().getTime() - this.beforeLapTime;
            }
            this.beforeLapTime = new Date().getTime();
        }

        this.setState({
            splits: [...this.state.splits, newLap]
        });
    };

    render() {
        const {startTime, currentTime, splits, isStarted} = this.state;
        return (
            <React.Fragment>
                <h1>秒表{this.state.count}</h1>
                <div>
                    <label><input type="radio" name="stopType" value={1} defaultChecked
                                  onChange={this.onSelect}/>单独计时</label>
                    <label><input type="radio" name="stopType" value={0} onChange={this.onSelect}/>累计计时</label>
                </div>
                <MajorClock milliseconds={currentTime - startTime}
                activated={isStarted}/>
                <ControlButtons
                    activated={this.state.isStarted}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onReset={this.onReset}
                    onSplit={this.onSplit}
                />
                <SplitTimes splits={splits} activated={isStarted}/>
            </React.Fragment>
        );
    }
}

export default StopWatch;