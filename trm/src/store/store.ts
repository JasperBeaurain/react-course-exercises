import {combineReducers, createStore} from "redux";
import {useDispatch} from "react-redux";
import {CounterActions} from "../components/Counter/Counter.actions";
import {counterReducer} from "../components/Counter/Counter.slice";
import {daysReducer} from "../components/DaysOverview/Days.slice";
import {composeWithDevTools} from "redux-devtools-extension";


export type Actions = CounterActions;

const rootReducer = combineReducers({
    counter: counterReducer,
    days: daysReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

