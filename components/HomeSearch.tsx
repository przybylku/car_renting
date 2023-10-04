"use client";


import { useOrderStore } from "@/app/store/zustand";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {useSelector, useDispatch} from 'react-redux'
import { firstStepData } from "@/app/store/featues/orderSlice";
export default function HomeSearch() {
  // const order = useSelector((state) => state)
  const dispatch = useDispatch()
  const date = new Date();
  const { push } = useRouter();
  const now = date.toLocaleDateString("en-CA");
  const [location, setLocation] = useState<string>("");
  const [pickup, setPickup] = useState<string>(now);
  const [return_, setReturn_] = useState<string>(now);
  return (
    <>
      <div className="absolute top-[50px] flex flex-row justify-center flex-wrap w-full">
        <div className="basis-1/4"></div>
        <h1 className="basis-2/4 text-center text-white text-[1.7rem] font-bold">
          Wynajem samochodów - Znajdź ofertę, porównaj i oszczędzaj!
        </h1>
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-2/4 flex flex-row mt-[20px] justify-center">
          <p className="flex flex-row text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Bezpłatne odwołanie większości rezerwacji
          </p>
          <p className="flex flex-row text-white ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Ponad 60 000 lokalizacji
          </p>
          <p className="flex flex-row text-white ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Najlepsza obsługa klienta
          </p>
        </div>
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-2/4 h-[70px] w-full mt-[20px] flex flex-row flex-nowrap p-1 rounded-md bg-palette-100">
          <input
            placeholder="Miejsce odbioru"
            type="text"
            className="p-3 h-[60px] rounded-md basis-3/6"
            onChange={(e) => setLocation(e.currentTarget.value)}
          />
          <div className="px-2 py-2 ml-1 h-[60px] rounded-md basis-1/6 bg-white">
            <p className="text-[0.8rem]">Data odbioru</p>
            <input
              placeholder="Miejsce odbioru"
              type="date"
              value={pickup}
              onChange={(e) => setPickup(e.currentTarget.value)}
            />
          </div>
          <div className="px-2 py-2 ml-1 h-[60px] rounded-md basis-1/6 bg-white">
            <p className="text-[0.8rem]">Data zwrotu</p>
            <input
              placeholder="Miejsce odbioru"
              type="date"
              onChange={(e) => setReturn_(e.currentTarget.value)}
              value={return_}
            />
          </div>
          <div
            onClick={() => {
              dispatch(firstStepData({pickup, return: return_, location}))
              return push("/offert");
            }}
            className="px-2 py-2 ml-1 h-[60px] rounded-md basis-1/6 bg-green-500 text-center self-center leading-[45px] text-white font-bold text-[1.5rem]"
          >
            Szukaj
          </div>
        </div>
        {/* <div className="basis-1/4">{order?.pickupDate}</div> */}
      </div>
    </>
  );
}
