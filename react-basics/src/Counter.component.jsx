import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            increment: 1,
        };
    }

    render() {
        return (
            <div>
                <p>current count: { this.props.count }</p>
                <input
                    type="number"
                    value={this.state.increment}
                    onChange={(event) => this.setState({
                        increment: +event.target.value,
                    })}
                />
                <button
                    onClick={() => this.props.setCount(this.props.count + this.state.increment)}
                >increment</button>
            </div>
        );
    }
}