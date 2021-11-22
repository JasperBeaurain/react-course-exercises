import React from "react";
import Menu from "../Menu/Menu.component";
import CounterPreview from "./CounterPreview.component";

const Header: React.FunctionComponent = () => {
    return (
        <div style={{ background: "#ccc"}}>
            <h1>Test application</h1>
            <CounterPreview />
            <Menu />
        </div>
    );
};

export default Header;