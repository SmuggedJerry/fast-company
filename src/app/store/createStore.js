import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";

const rootRudecer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootRudecer
    });
}
