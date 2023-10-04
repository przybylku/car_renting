"use client";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default async function Header() {
  const router = usePathname();
  return (
    <header
      className={`w-full px-5 py-3 flex justify-center bg-gradientColorStops-darkBlue
      }]`}
    >
      <div className="w-5/6 flex justify-around items-center ">
        <h1
          style={{ textShadow: "1px 5px 10px rgba(0,0,0,0.2)" }}
          className="text-[1.9rem] font-extrabold text-white"
        >
          CarRenting<span className="text-white text-[1.2rem]">.Com</span>
        </h1>
        {/* <Link
          className="leading-[1.6rem] self-center text-white text-[1.2rem]"
          href={"/login"}
        >
          Panel rezerwacji
        </Link> */}
      </div>
    </header>
  );
}
