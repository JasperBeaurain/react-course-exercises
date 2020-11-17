import React from "react";

class NameSaver extends React.Component {

    render() {
        return (
            <div>
                <h3>name saver</h3>
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

export default NameSaver;