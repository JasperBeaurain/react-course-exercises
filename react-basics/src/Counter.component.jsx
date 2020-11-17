import React from "react";

class Counter extends React.Component {

    render() {
        return (
            <div>
                <h3>component</h3>
                <p>counter: { this.props.counter }</p>
                <button
                    onClick={this.props.onIncrement}
                >CLick me!</button>
            </div>
        );
    }
}

export default Counter;