"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    car_name: "",
    price: "",
    carID: 0,
}

export const orderSlice = createSlice({
    name: "orderName",
    initialState,
    reducers: {
        firstStepData: (state, action) => {
            state.pickupDate = action.payload;
            state.pickupLocation = action.payload;
            state.returnDate = action.payload
        }
    }
})

export const {firstStepData} = orderSlice.actions

export default orderSlice.reducer