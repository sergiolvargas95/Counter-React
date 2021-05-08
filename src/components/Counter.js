import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
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
            <div>
                <div>
                    <h1>{this.state.count}</h1>
                </div>
                <button className="upcounter" onClick={this.upCount}>UP</button>
                <button className="downcounter" onClick={this.downCount}>DOWN</button>
                <button className="resetcounter" onClick={this.resetCount}>RESET</button>
            </div>
        )
    }
}

export default Counter;