import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    render() {
        return (
            <div>
                <h3>component</h3>
                <p>counter: { this.state.counter }</p>
                <button
                    onClick={() => {
                        this.setState((oldState) => ({
                            counter: oldState.counter + 1,
                        }))
                    }}
                >CLick me!</button>
            </div>
        );
    }
}

export default Counter;