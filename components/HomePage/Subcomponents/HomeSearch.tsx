"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { firstStepData } from "@/app/store/featues/orderSlice";
import { useAppDispatch } from "@/app/store";
export default function HomeSearch() {
  const dispatch = useAppDispatch();
  const date = new Date();
  const { push } = useRouter();
  const now = date.toLocaleDateString("en-CA");
  const [location, setLocation] = useState<string>("");
  const [pickup, setPickup] = useState<string>(now);
  const [return_, setReturn_] = useState<string>(now);
  return (
    <>
      <div className="flex flex-row justify-center flex-wrap w-full z-20">
        <div className="basis-3/4 md:basis-2/4 h-[70px] mmd:h-auto mmd:items-center mmd:justify-center gap-1 mmd:gap-3 w-full flex flex-row mmd:flex-col flex-nowrap p-1 rounded-md bg-palette-100">
          <input
            placeholder="Miejsce odbioru"
            type="text"
            className="p-3 h-[60px] rounded-md basis-3/6 mmd:w-full"
            onChange={(e) => setLocation(e.currentTarget.value)}
          />
          <div className="px-2 py-2 h-[60px] rounded-md mmd:w-full basis-1/6 bg-white">
            <p className="text-[0.8rem]">Data odbioru</p>
            <input
              placeholder="Miejsce odbioru"
              type="date"
              value={pickup}
              onChange={(e) => setPickup(e.currentTarget.value)}
            />
          </div>
          <div className="px-2 py-2 h-[60px] rounded-md mmd:w-full basis-1/6 bg-white">
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
              dispatch(firstStepData({ pickup, return: return_, location }));
              return push("/offert");
            }}
            className="px-2 py-2 mmd:mt-2 h-[60px] mmd:w-full rounded-md basis-1/6 bg-green-500 text-center self-center leading-[45px] text-white font-bold text-[1.5rem] hover:brightness-[.8] cursor-pointer"
          >
            Szukaj
          </div>
        </div>
      </div>
    </>
  );
}
