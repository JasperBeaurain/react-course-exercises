import { combineReducers, createStore } from "redux";
import daysReducer from "./days.slice";

const rootReducer = combineReducers({
    days: daysReducer,
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;