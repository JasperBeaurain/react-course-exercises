import React from "react";

class Child extends React.Component {

    buttonClickHandler() {
        this.props.clickHandler();
    }

    render() {
        return (
            <button onClick={() => this.buttonClickHandler()}>Click me</button>
        );
    }
}

export default Child;