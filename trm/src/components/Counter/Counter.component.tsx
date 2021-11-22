import React, {createRef} from "react";
import useFocus from "./useFocus";
import {useSelector} from "react-redux";
import {
    useAppDispatch
} from "../../store/store";
import {
    counterDecremented,
    counterIncremented,
    counterIncrementedByStoredValue,
    incrementByValueUpdated
} from "./Counter.actions";
import {countSelector, incrementBySelector} from "./Counter.slice";

const Counter: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const inputRef = createRef<HTMLInputElement>();
    useFocus(inputRef);

    return (
        <>
            <p>Count : {useSelector(countSelector)}</p>
            <button
                onClick={() => dispatch(counterIncremented())}
            >
                ++
            </button>
            <button
                onClick={() => dispatch(counterDecremented())}
            >
                --
            </button>
            <input
                type="number"
                value={useSelector(incrementBySelector)}
                ref={inputRef}
                onChange={event => dispatch(incrementByValueUpdated(+event.target.value))}
            />
            <button
                onClick={() => dispatch(counterIncrementedByStoredValue())}
            >
                + inc
            </button>
        </>
    );
};

export default Counter;