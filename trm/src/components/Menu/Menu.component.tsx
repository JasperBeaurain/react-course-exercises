import React from "react";
import {Link} from "react-router-dom";

const Menu: React.FunctionComponent = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/days">Days</Link>
            </li>
        </ul>
    );
};

export default Menu;