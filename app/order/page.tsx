"use client"
import { useEffect, useState } from "react";
import { Parametr } from "../api/cars/route";

async function handleGettingCar(){
    const res = await fetch(`http://localhost:3000/api/cars?id=1`, {method: "GET"});
    return await res.json();
}

export default function OrderPage(){
    const [car, setCar] = useState<any>()
    useEffect(() => {
        handleGettingCar().then((d) => setCar(d?.res?.[0]))
    },[])
    return (
        <>
            nic
            <p>{car ? car?.name : <>a</>}</p>
        </>
    )
}