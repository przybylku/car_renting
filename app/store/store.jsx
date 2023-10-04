"use client"

import { combineReducers, configureStore } from "@reduxjs/toolkit"
import orderSlice from "./featues/orderSlice"

const rootReducer = combineReducers({
    order: orderSlice
})

export const store = configureStore({
    reducer: rootReducer
})