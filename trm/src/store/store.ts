import {combineReducers, createStore} from "redux";
import trmReducer from "./trm.slice";


const rootReducer = combineReducers({
    trm: trmReducer,
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;