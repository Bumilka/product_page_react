import React, { Component } from 'react';
import Button from './Button';
import './style.scss';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        };
    }
    incrementNumber = () => (this.setState({ number: this.state.number + 1 }))
    decrementNumber = () => (this.setState({ number: this.state.number - 1 }))
    resetNumber = () => (this.setState({ number: 0 }))

    render() {
        return (        
                <div className="counter">
                    <Button className="counterBorder"
                        text="-"
                        handleClick={this.decrementNumber}
                    />
                    <div className="counterBorder"> {this.state.number}</div>
                    <Button
                        text="+"
                        handleClick={this.incrementNumber}
                    />
                </div>
        );
    }
}

export default Counter;