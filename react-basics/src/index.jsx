import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.component";
import NameSaver from "./NameSaver.component";
import Todos from "./Todos.component";
import Header from "./Header.component";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState((oldState) => ({
            counter: oldState.counter + 1,
        }));
    }

    render() {
        return (
            <>
                <Header
                    counter={this.state.counter}
                />
                <Counter
                    counter={this.state.counter}
                    onIncrement={this.increment}
                />
                <NameSaver />
                <Todos />
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
