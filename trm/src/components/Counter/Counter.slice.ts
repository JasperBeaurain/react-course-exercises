import {Actions, RootState} from "../../store/store";

export interface CounterState {
    count: number,
    incrementBy: number,
}

export const initialCounterState: CounterState = {
    count: 0,
    incrementBy: 1,
};

export const counterReducer = (state: CounterState = initialCounterState, action: Actions) => {
    switch (action.type) {
        case "CounterIncremented":
            return ({
                ...state,
                count: state.count + 1
            });
        case "CounterDecremented":
            return ({
                ...state,
                count: state.count - 1,
            });
        case "CounterIncrementedStoredValue":
            return ({
                ...state,
                count: state.count + state.incrementBy,
            });
        case "IncrementValueUpdated":
            return ({
                ...state,
                incrementBy: action.payload,
            });
        default:
            return state;
    }
};

// const beforeState: CounterState = {
//     count: 0,
//     incrementBy: 1,
// };
//
// const afterState: CounterState = counterReducer(beforeState, { type: "CounterIncremented" });
//
// afterState.count === 1;
// afterState.incrementBy === 1;
//





export const countSelector = (state: RootState) => state.counter.count;
export const incrementBySelector = (state: RootState) => state.counter.incrementBy;