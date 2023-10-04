"use client";
import { useEffect, useState } from "react";
import { Parametr } from "../api/cars/route";
import { useOrderStore } from "../store/zustand";

async function handleGettingCar(id: string | number) {
  const res = await fetch(`http://localhost:3000/api/cars?id=${id}`, {
    method: "GET",
  });
  return await res.json();
}

export default function OrderPage() {
  const [car, setCar] = useState<any>();
  const order = useOrderStore((state) => state);
  useEffect(() => {
    handleGettingCar(order?.carID).then((d) => setCar(d?.res?.[0]));
  }, [order]);
  return (
    <>
      nic
      <p>{car ? car?.name : <>a</>}</p>
      <p>{order ? order.carID : <>a</>}</p>
    </>
  );
}
