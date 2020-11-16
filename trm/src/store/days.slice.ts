import Day from "../models/Day";
import { v4 as uuidv4 } from "uuid";
import { ADD_DAY, ADD_TIME_RECORD, DaysActions, DELETE_DAY, DELETE_TIME_RECORD } from "./days.actions";
import { RootState } from "./store";
import TimeRecord from "../models/TimeRecord";

type DaysSliceState = Day[];
const initialState: DaysSliceState = [];

const daysReducer = (state: DaysSliceState = initialState, action: DaysActions) => {
    switch (action.type) {
        case ADD_DAY:
            const newDay = {
                id: uuidv4(),
                date: action.payload,
                timeRecords: [],
            };

            return [ ...state, newDay ];
        case DELETE_DAY:
            return [...state].filter(day => day.id !== action.payload);
        case ADD_TIME_RECORD:
            return [...state].map(day => {
                if (day.id !== action.payload.dayId) return day;

                const newTimeRecord: TimeRecord = {
                    id: uuidv4(),
                    from: action.payload.from,
                    to: action.payload.to
                };

                return {
                    ...day,
                    timeRecords: [...day.timeRecords, newTimeRecord],
                };
            });
        case DELETE_TIME_RECORD:
            return [...state].map(day => {
                if (day.id !== action.payload.dayId) return day;

                return {
                    ...day,
                    timeRecords: day.timeRecords.filter(tr => tr.id !== action.payload.timeRecordId),
                };
            });
        default:
            return state;
    }
};

export default daysReducer;

export const days = (rootState: RootState): Day[] => rootState.days;