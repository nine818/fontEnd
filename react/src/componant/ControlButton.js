import React from 'react';
import './ControlButton.css';
import {Button} from "antd";


//PureComponent只做浅层比较，如果props是一个深层对象，容易出现问题。
//可提高组件渲染性能，但是必须实现为class
class ControlButtons1 extends React.PureComponent {

    render(){
        console.log("button1");
       const {activated, onStart, onPause, onReset, onSplit} = this.props;
        return (
            <div>
                {activated ? <React.Fragment>
                        <Button shape="circle" className="left-btn" onClick={onSplit}>计次</Button>
                        <Button shape="circle" className="right-btn" onClick={onPause}>停止</Button>
                    </React.Fragment> :
                    <React.Fragment>
                        <Button shape="circle" className="left-btn" onClick={onReset}>复位</Button>
                        <Button shape="circle" className="right-btn" onClick={onStart}>启动</Button>
                    </React.Fragment>}
            </div>
        );
    }

}

//16.6之后的版本,完美解决
const ControlButtons = React.memo(({activated, onStart, onPause, onReset, onSplit})=>{
    console.log('button ...')
    return (
        <div>
            {activated ? <React.Fragment>
                    <Button shape="circle" className="left-btn" onClick={onSplit}>计次</Button>
                    <Button shape="circle" className="right-btn" onClick={onPause}>停止</Button>
                </React.Fragment> :
                <React.Fragment>
                    <Button shape="circle" className="left-btn" onClick={onReset}>复位</Button>
                    <Button shape="circle" className="right-btn" onClick={onStart}>启动</Button>
                </React.Fragment>}
        </div>
    );
});


export default ControlButtons;