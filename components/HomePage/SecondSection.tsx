import React from "react";
import Cards from "@/components/HomePage/Subcomponents/Cards";

export default async function SecondSection() {
  return (
    <div className="flex flex-col w-full bg-[#21033A] py-12">
      <div className="flex justify-center">
        <div className="flex-col flex w-3/4">
          <h1 className="text-xl font-bold mb-3 text-white">
            Co CarRenting wnosi do stołu?
          </h1>
          <div className="grid grid-cols-auto-fit justify-center align-center gap-3">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
