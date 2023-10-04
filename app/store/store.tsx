"use client"

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import orderSlice from "./featues/orderSlice"
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from "redux-persist"
// import storageSession from 'redux-persist/lib/storage/session' Not working :C
import storage from "./storage"
const rootReducer = combineReducers({
    order: orderSlice
})
const persistedReducer = persistReducer({key: "root", storage: storage}, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export const persistor = persistStore(store)