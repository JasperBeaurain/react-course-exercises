import Day from "../models/Day";
import {RootState} from "./store";
import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TrmState {
    days: Day[],
    dayToAdd?: number,
}

const initialState: TrmState = {
    days: [],
    dayToAdd: undefined,
};

type TrmReducers = {
    add: CaseReducer<TrmState, PayloadAction<Day>>
    remove: CaseReducer<TrmState, PayloadAction<string>>
    setDayToAdd: CaseReducer<TrmState, PayloadAction<number>>
}

const trmSlice = createSlice<TrmState, TrmReducers>({
    name: "trm",
    initialState,
    reducers: {
        add: (oldState, action) => ({
            ...oldState,
            days: [...oldState.days, action.payload]
        }),
        remove: (oldState, action) => ({
            ...oldState,
            days: oldState.days.filter(day => day.id !== action.payload)
        }),
        setDayToAdd: (oldState, action) => ({
            ...oldState,
            dayToAdd: action.payload,
        }),
    },
});

export const daysSelector = (state: RootState) => state.trm.days;
export const dayToAddSelector = (state: RootState) => state.trm.dayToAdd;

export const { add, remove, setDayToAdd } = trmSlice.actions;

export default trmSlice.reducer;
