import React from "react";

export default async function FirstSection() {
  return (
    <div className="w-screen h-[92vh] bg-gradient-to-b from-gradientColorStops-darkBlue via-gradientColorStops-darkBlue to-[#f1f3f4] via-[30%] flex justify-center items-center ">
      <div className="relative bg-cover before:absolute before:bg-gradient-to-r from-white via-white to-transparent via-[20%] shadow-contactThic shadow-gradientColorStops-darkBlue before:rounded-l-lg before:z-0 before:h-full before:w-full before:left-0 before:top-0 bg-contact2 bg-no-repeat bg-right p-12 space-y-10 rounded-lg w-3/4 h-3/4 flex flex-col justify-center">
        <h1 className="relative font-bold text-5xl z-10 text-gradientColorStops-darkBlue">
          Skontaktuj się z nami!
        </h1>
        <div className="relative grid gap-4 grid-cols-[1.5fr,1.5fr,1fr,1fr]">
          <div className="relative bg-white shadow-contact shadow-black p-5 flex flex-col items-center justify-center rounded-lg">
            <p>Info</p>
            <p>do</p>
            <p>kontaktu</p>
          </div>
          <div className="relative bg-white shadow-contact shadow-black p-5 flex flex-col items-center justify-center rounded-lg">
            <p>Info</p>
            <p>do</p>
            <p>kontaktu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
