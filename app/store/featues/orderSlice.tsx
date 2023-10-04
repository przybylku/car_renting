"use client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type orderType = {
  pickupDate: String;
  returnDate: String;
  pickupLocation: String;
  car_name: String;
  price: "";
  carID: Number;
};

const initialState: orderType = {
  pickupDate: "",
  returnDate: "",
  pickupLocation: "",
  car_name: "",
  price: "",
  carID: 0,
};

export const orderSlice = createSlice({
  name: "orderName",
  initialState,
  reducers: {
    firstStepData: (state, action) => {
      state.pickupDate = action.payload.pickup;
      state.pickupLocation = action.payload.location;
      state.returnDate = action.payload.return;
    },
    setCarId: (state, action) => {
      state.carID = action.payload;
    },
  },
});

export const { firstStepData, setCarId } = orderSlice.actions;

export const selectOrder = (state: RootState) => state.order;

export default orderSlice.reducer;
