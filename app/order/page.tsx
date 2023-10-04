"use client";
import { useEffect, useState } from "react";
import { Parametr } from "../api/cars/route";
import {useSelector} from 'react-redux'
import { useAppSelector } from "../store";
import { orderType, selectOrder } from "../store/featues/orderSlice";
async function handleGettingCar(id: Number){
    const res = await fetch(`http://localhost:3000/api/cars?id=${id}`, {method: "GET"});
    return await res.json();
}

export default function OrderPage(){
    const [car, setCar] = useState<any>()
    const order: orderType = useAppSelector(selectOrder)
    useEffect(() => {
        handleGettingCar(order?.carID).then((d) => setCar(d?.res?.[0]))
    },[order])
    return (
            <>  
        <div className="max-w-7xl md:container mx-auto px-4 ">
            <div className="columns-md flex w-full mt-5 justify-center flex-row basis-full justify-center h-[auto] mb-5">
            <div className=" border-2 border-palette-200 p-3 rounded-md flex flex-row flex-nowrap">
            <div className="flex-col flex basis-1/3 flex-nowrap">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                {order?.pickupLocation}
                </p>{" "}
                <p className="text-[0.8rem] text-center tracking-tight">
                {order?.pickupDate}, 10:00
                </p>
            </div>
            <p className="m-[15px] text-center ml-4 text-[1.3rem] leading-5 font-bold">
                &#62;
            </p>
            <div className="flex-col flex basis-1/3">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                {order?.pickupLocation}
                </p>{" "}
                <p className="text-[0.8rem] text-center tracking-tight">
                {order?.returnDate}, 10:00
                </p>
            </div>
            <p className="m-[15px] ml-4 text-[1.3rem] leading-5 font-bold">
                &#62;
            </p>
            <div className="flex-col flex basis-1/3 justify-center">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                {car ? car.name: <>Loading...</>}
                </p>{" "}
                {/* <p className="text-[0.8rem] text-center tracking-tight">
                {order.pickupDate}, 10:00
                </p> */}
            </div>
            </div>
        </div>
                <div className="columns-3xs">
                    <h1 className="text-left w-full text-[1.5rem] font-bold uppercase">Twoja rezerwacja</h1>
                </div>
                <div className="columns-3xs">
                    <h1 className="text-center w-full text-[1.5rem] font-bold uppercase">Twoja rezerwacja</h1>
                </div><h2>Potrzebuje </h2>
            <p>{car ? car?.name : <>a</>}</p>
            <p>{order ? <>{order.carID}</> : <>a</>}</p>
        </div>
        </>
    )
}
