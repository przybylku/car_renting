import { Hamburger } from "@/components/svg";
import React from "react";

export default function NavBar() {
  return (
    <div className="fixed select-none pointer-events-none right-9 bottom-24 w-screen h-screen flex justify-end items-center z-50 text-red-600">
      <div className="bg-black w-14 h-14 flex justify-center items-center rounded-xl">
        <Hamburger />
      </div>
    </div>
  );
}
