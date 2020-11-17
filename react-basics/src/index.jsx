import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.component";
import NameSaver from "./NameSaver.component";


class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
                <NameSaver />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
