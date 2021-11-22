import {Actions} from "../../store/store";
import Day from "../../models/Day";

export interface DaysState {
    days: Day[],
}

export const initialDaysState: DaysState = {
    days: [],
};

export const daysReducer = (state: DaysState = initialDaysState, action: Actions) => {
    switch (action.type) {
        
        default:
            return state;
    }
};