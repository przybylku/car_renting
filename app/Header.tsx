import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import React from "react";

export default async function Header() {
  return (
    <header className="flex justify-between items-center w-full px-5 py-3 border-b-[1px] border-b-gray-500">
      <div className="w-full basis-1/5">LOGO</div>
      <div className="w-full basis-3/5">
        <SearchBar className="text-black w-full p-4 rounded-md border-2 border-gray-500 bg-palette-100" />
      </div>
      <div className="w-full basis-1/5 flex justify-end">
        <Link href={"/login"}>Zaloguj się</Link>
      </div>
    </header>
  );
}
