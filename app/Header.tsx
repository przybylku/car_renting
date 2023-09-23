import SearchBar from "@/components/SearchBar";
import React from "react";

export default async function Header() {
  return (
    <header className="flex justify-between items-center w-screen px-5 py-3 border-b-[1px] border-b-gray-500">
      <div className="w-full flex-[28%]">LOGO</div>
      <div className="w-full flex-[43%]">
        <SearchBar className="text-black w-full p-4 rounded-md border-2 border-gray-500 bg-palette-100" />
      </div>
      <div className="w-full flex-[28%] flex justify-end">Login</div>
    </header>
  );
}
