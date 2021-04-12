import {combineReducers} from "redux";
import trmReducer from "./trm.slice";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    trm: trmReducer,
});

const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;