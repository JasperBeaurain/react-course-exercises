

export type CounterActions = CounterIncremented | CounterDecremented | CounterIncrementedStoredValue| IncrementValueUpdated;

interface CounterIncremented {
    type: "CounterIncremented",
}

interface CounterDecremented {
    type: "CounterDecremented",
}

interface CounterIncrementedStoredValue {
    type: "CounterIncrementedStoredValue",
}

interface IncrementValueUpdated {
    type: "IncrementValueUpdated",
    payload: number,
}

export const counterIncremented = (): CounterIncremented => ({ type: "CounterIncremented" });
export const counterDecremented = (): CounterDecremented => ({ type: "CounterDecremented" });
export const counterIncrementedByStoredValue = (): CounterIncrementedStoredValue => ({ type: "CounterIncrementedStoredValue" });
export const incrementByValueUpdated = (newValue: number): IncrementValueUpdated => ({ type: "IncrementValueUpdated", payload: newValue });
