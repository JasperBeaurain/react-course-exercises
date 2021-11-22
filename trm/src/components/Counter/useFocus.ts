import {RefObject, useEffect} from "react";


const useFocus = (inputRef: RefObject<HTMLInputElement>) => {
    useEffect(
        () => {
            inputRef.current?.focus();
            console.log("Focussed");
        },
        []
    );
};

export default useFocus;