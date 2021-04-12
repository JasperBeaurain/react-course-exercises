import Day from "../models/Day";
import {RootState} from "./store";

export const ADD_DAY = "trm/add";
export const REMOVE_DAY = "trm/remove";
export const SET_DAY_TO_ADD = "trm/SET_DAY_TO_ADD";

interface TrmState {
    days: Day[],
    dayToAdd?: number,
}

const initialState: TrmState = {
    days: [],
    dayToAdd: undefined,
};

interface AddDayAction {
    type: typeof ADD_DAY,
    payload: Day,
}
interface RemoveDayAction {
    type: typeof REMOVE_DAY,
    payload: string,
}
interface SetDayToAddAction {
    type: typeof SET_DAY_TO_ADD,
    payload: number,
}

type TrmActions = AddDayAction | RemoveDayAction | SetDayToAddAction;

const trmReducer = (oldState: TrmState = initialState, action: TrmActions): TrmState => {
    switch (action.type) {
        case ADD_DAY:
            return {
                ...oldState,
                days: [...oldState.days, action.payload]
            };
        case REMOVE_DAY:
            return {
                ...oldState,
                days: oldState.days.filter(day => day.id !== action.payload)
            };
        case SET_DAY_TO_ADD:
            return {
                ...oldState,
                dayToAdd: action.payload,
            };
        default:
            return oldState;
    }
};

export const addDayAction = (day: Day): AddDayAction => ({
    type: ADD_DAY,
    payload: day,
});
export const removeDayAction = (dayId: string): RemoveDayAction => ({
    type: REMOVE_DAY,
    payload: dayId,
});
export const setDayToAddAction = (day: number): SetDayToAddAction => ({
    type: SET_DAY_TO_ADD,
    payload: day,
});

export const daysSelector = (state: RootState) => state.trm.days;
export const dayToAddSelector = (state: RootState) => state.trm.dayToAdd;

export default trmReducer;