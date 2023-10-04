"use client";
import { useEffect, useState } from "react";
import { Parametr } from "../api/cars/route";
import { useSelector } from "react-redux";
import { useAppSelector } from "../store";
import { orderType, selectOrder } from "../store/featues/orderSlice";
async function handleGettingCar(id: Number) {
  const res = await fetch(`http://localhost:3000/api/cars?id=${id}`, {
    method: "GET",
  });
  return await res.json();
}

export default function OrderPage() {
  const [car, setCar] = useState<any>();
  const order: orderType = useAppSelector(selectOrder);
  useEffect(() => {
    handleGettingCar(order?.carID).then((d) => setCar(d?.res?.[0]));
  }, [order]);
  return (
    <>
      <div className="columns-3xs">
        <h1 className="text-left w-full text-[1.5rem] font-bold uppercase">
          Twoja rezerwacja
        </h1>
      </div>
      <div className="columns-3xs">
        <h1 className="text-center w-full text-[1.5rem] font-bold uppercase">
          Twoja rezerwacja
        </h1>
      </div>
      <h2>Potrzebuje </h2>
      <p>{car ? car?.name : <>a</>}</p>
      <p>{order ? <>{order.carID}</> : <>a</>}</p>
    </>
  );
}
