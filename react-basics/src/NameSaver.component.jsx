import React from "react";

class NameSaver extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };
    }

    render() {

        const greeting = this.state.name.length > 0
            ? <p>name: { this.state.name }</p>
            : <p>Please fill in your name</p>;

        return (
            <div>
                <h3>Name saver</h3>
                { greeting }
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => {
                        this.setState({
                            name: event.target.value,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        this.setState({
                            name: "reset",
                        });
                    }}
                >change</button>
            </div>
        );
    }
}

export default NameSaver;