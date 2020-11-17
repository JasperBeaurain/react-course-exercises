import React from "react";

class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            currentText: "",
        };
    }

    render() {
        return (
            <div>
                <h3>Todos</h3>
                <input
                    type="text"
                    value={this.state.currentText}
                    onChange={(event) => {
                        this.setState({
                            currentText: event.target.value,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        this.setState((oldState) => ({
                            todos: [ ...oldState.todos, oldState.currentText],
                            currentText: "",
                        }));
                    }}
                >
                    Add todo
                </button>

                <ul>
                    { this.state.todos.map((todo, index) => (
                        <li key={index}>{ todo }</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todos;