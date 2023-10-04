"use client";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default async function Header() {
  const router = usePathname();
  const bg = router == "/" ? "transparent" : "#4037d9";
  return (
    <header style={{backgroundColor: `${bg}`}}
      className={`flex justify-between items-center w-full px-5 py-3  bg-[${ router && router == "/" ? "transparent" : "#4037d9"}]`}
    >
      <div className="w-full basis-2/6"></div>
      <div className="w-full basis-2/6 justify-between flex flex-row">
        <h1
          style={{ textShadow: "1px 5px 10px rgba(0,0,0,0.2)" }}
          className="text-[1.9rem] font-extrabold text-white"
        >
          CarRenting<span className="text-white text-[1.2rem]">.Com</span>
        </h1>
        <Link
          className="leading-[1.6rem] self-center text-white text-[1.2rem]"
          href={"/login"}
        >
          Panel rezerwacji
        </Link>
      </div>
      <div className="w-full basis-2/6 flex justify-end"></div>
    </header>
  );
}
