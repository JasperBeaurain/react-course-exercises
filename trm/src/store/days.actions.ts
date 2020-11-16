export const ADD_DAY = "ADD_DAY";
export const DELETE_DAY = "DELETE_DAY";
export const ADD_TIME_RECORD = "ADD_TIME_RECORD";
export const DELETE_TIME_RECORD = "DELETE_TIME_RECORD";

interface AddDayAction {
    type: typeof ADD_DAY,
    payload: Date,
}
export const addDay = (date: Date): AddDayAction => ({
    type: ADD_DAY,
    payload: date,
});

interface DeleteDayAction {
    type: typeof DELETE_DAY,
    payload: string,
}
export const deleteDay = (dayId: string): DeleteDayAction => ({
    type: DELETE_DAY,
    payload: dayId,
});

interface AddTimeRecordAction {
    type: typeof ADD_TIME_RECORD,
    payload: {
        dayId: string,
        from: string,
        to: string,
    },
}
export const addTimeRecord = (dayId: string, from: string, to: string): AddTimeRecordAction => ({
    type: ADD_TIME_RECORD,
    payload: { dayId, from, to },
});

interface DeleteTimeRecordAction {
    type: typeof DELETE_TIME_RECORD,
    payload: {
        dayId: string,
        timeRecordId: string,
    },
}
export const deleteTimeRecord = (dayId: string, timeRecordId: string): DeleteTimeRecordAction => ({
    type: DELETE_TIME_RECORD,
    payload: { dayId, timeRecordId },
});

export type DaysActions = AddDayAction | DeleteDayAction | AddTimeRecordAction | DeleteTimeRecordAction;