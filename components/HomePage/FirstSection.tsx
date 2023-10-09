import React from "react";
import Offers from "@/components/HomePage/Subcomponents/Offers";
import HomeSearch from "@/components/HomePage/Subcomponents/HomeSearch";

export default async function FirstSection() {
  return (
    <div className="relative bg-blue-sky h-[100vh] w-full bg-[center_bottom_-2rem] bg-no-repeat bg-cover flex justify-center items-center flex-col before:w-full before:h-full before:absolute before:bg-gradient-to-b from-gradientColorStops-darkBlue via-gradientColorStops-darkBlue to-gradientColorStops-lastColor via-[20%] space-y-6 mmd:space-y-7">
      <div className="z-20 flex flex-col space-y-4 mmd:space-y-5 mmd:mt-0 -mt-36 mmd:mt-5">
        <h1 className="text-center text-white text-[1.7rem] font-bold">
          Wynajem samochodów - Znajdź ofertę, porównaj i oszczędzaj!
        </h1>
        <div className="flex mmd:flex-col mmd:items-center gap-5 z-20">
          <Offers />
        </div>
      </div>
      <HomeSearch />
    </div>
  );
}
