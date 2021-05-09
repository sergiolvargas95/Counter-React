import React from 'react';
import './styles/Counter.css'
import rightArrow from '../images/arrow-right.svg';
import leftArrow from '../images/arrow-left.svg';
import reLoad from '../images/reload.svg';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100
        }
    }

    upCount = e => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    };

    downCount = e => {
        e.preventDefault();
        this.setState(prevState => {
            if(prevState.count >= 1) {
                return {
                    count: prevState.count - 1
                }
            }
        });
    };

    resetCount = e => {
        e.preventDefault();
        this.setState({count: 0});
    };

    render() {
        return (
            <div className="Container">
                <div className="Counter__container">
                    <button className="DownCounter" onClick={this.downCount}><img src={leftArrow} alt="left Arrow"/></button>
                    <div>
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="UpCounter" onClick={this.upCount}><img src={rightArrow} alt="left Arrow"/></button>
                </div>
                <button className="ResetCounter" onClick={this.resetCount}><img src={reLoad} alt="reload"/></button>
            </div>
        )
    }
}

export default Counter;