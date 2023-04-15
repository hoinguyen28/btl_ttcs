import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import appReduce from "./slice/appReduce";

const rootReducer = combineReducers({
  appReduce
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export default store;