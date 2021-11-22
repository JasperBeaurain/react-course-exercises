import React, {createRef, useEffect, useState} from "react";
import useFocus from "./useFocus";

const Counter: React.FunctionComponent = () => {
    const [count, setCount] = useState<number>(0);
    const [incrementValue, setIncrementValue] = useState<number>(0);

    const inputRef = createRef<HTMLInputElement>();
    useFocus(inputRef);

    return (
        <>
            <p>Count : {count}</p>
            <button
                onClick={() => setCount(count + 1)}
            >
                ++
            </button>
            <input
                type="number"
                value={incrementValue}
                ref={inputRef}
                onChange={event => setIncrementValue(+event.target.value)}
            />
            <button
                onClick={() => setCount(count + incrementValue)}
            >
                + inc
            </button>
        </>
    );
};

export default Counter;