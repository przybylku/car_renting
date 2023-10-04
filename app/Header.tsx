import Link from "next/link";
import React from "react";

export default async function Header() {
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
          <Link href={"/"}>
            CarRenting
            <span className="text-white text-[1.2rem]">.Com</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
