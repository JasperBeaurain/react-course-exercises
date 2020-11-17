import React from "react";
import Navigation from "./Navigation.component";

class Header extends React.Component {
    render() {
        return (
            <>
                <Navigation counter={this.props.counter} />
                <p>something else</p>
            </>
        );
    }
}

export default Header;