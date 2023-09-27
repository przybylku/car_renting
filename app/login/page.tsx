import dynamic from "next/dynamic";
import { Suspense } from "react";
const Image = dynamic(() => import("@/components/RenderImage"));

export default function LoginPage() {
  return (
    <main>
      <div className="flex flex-wrap flex-row absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[33%] h-[66%] bg-palette-100 rounded-md">
        <h1 className="basis-full text-center text-[50px] w-full uppercase">
          Car Rent
        </h1>
      </div>
    </main>
  );
}
