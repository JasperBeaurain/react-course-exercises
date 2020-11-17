import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.component";
import NameSaver from "./NameSaver.component";
import Todos from "./Todos.component";


class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Counter />*/}
                {/*<NameSaver />*/}
                <Todos />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
