import {combineReducers, createStore} from "redux";
import {loginReducer} from "../reducer/loginReducer";

const reducers = combineReducers({
    login: loginReducer
});

export const store = createStore(reducers);

export type AppStoreType = ReturnType<typeof reducers>;
//export type ActionType =
//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, ActionType>


// @ts-ignore
window.store = store;
