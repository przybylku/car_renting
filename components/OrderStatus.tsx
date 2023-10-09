"use client";
import { orderType } from "@/app/store/featues/orderSlice";
import { useEffect, useState } from "react";
export default function OrderStatus({order, car}: {order: orderType, car?: any}){
    const [width, setWidth] = useState<number>(window.innerWidth)
    const dateTime = new Date(order.pickupDate as string).toLocaleDateString('pl-PL', {
        day: "numeric",
        month: 'short'
    })
    const dateTimeReturn = new Date(order.returnDate as string).toLocaleDateString('pl-PL', {
        day: "numeric",
        month: 'short'
    })
    useEffect(() => {
        function handleResize(){
            return setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
        {width > 470 ? <>
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
              {car ? car?.name: <>Wybierz Auto</>}
            </p>{" "}
            {/* <p className="text-[0.8rem] text-center tracking-tight">
                {order.pickupDate}, 10:00
                </p> */}</div>
          </div>
        </div>
        </div></> : <>
            <div className="flex flex-col self-end w-full">
            <hr className="border-b-2"/>
                <p className="text-[1.3rem] font-bold pt-2">{order.pickupLocation}</p>
                <p>{dateTime}, 10:00 - {dateTimeReturn}, 10:00</p>
            </div>
            
            </>}</>
    )
}