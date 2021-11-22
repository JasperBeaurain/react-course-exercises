import React from "react";
import {useSelector} from "react-redux";
import {countSelector} from "../Counter/Counter.slice";

const CounterPreview: React.FunctionComponent = () => {
    return (
        <>count preview: {useSelector(countSelector)}</>
    );
};

export default CounterPreview;