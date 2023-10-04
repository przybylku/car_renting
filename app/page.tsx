import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

export default function HomePage() {
  const date = new Date();
  const now = date.toLocaleDateString("en-CA");
  return (
    <main className="relative flex w-full flex-wrap">
      <div className="flex w-full flex-1 flex-col  px-[20px]">
        {/* <h1
          className="font-extrabold uppercase text-white text-[80px] px-4 mt-16 drop-shadow"
          style={{ textShadow: "5px 5px 35px black" }}
        >
          Rent your deam car!
        </h1>
        <h2
          className="font-light uppercase text-white text-[40px] px-4 mt-[-5px]"
          style={{ textShadow: "5px 5px 15px black" }}
        >
          check out our cars
        </h2>
        <div className="flex flex-row flex-nowrap w-[25%] mt-[20px]">
          <div className="basis-1/2 text-center bg-palette-100 ml-[20px] rounded px-1 text-[20px] leading-10">
            Zobacz oferte
          </div>
          <div className="basis-1/2 text-center bg-palette-100 ml-[20px] rounded px-1 text-[20px] leading-10">
            Wynajmij auto
          </div>
        </div> */}
      </div>
      <div className="relative top-[-400px] -z-20">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(64,55,217,1) 0%, rgba(91,91,255,1) 51%, rgba(0,212,255,0.2) 100%)",
          }}
          className="absolute w-full h-full bg-palette-200"
        ></div>

        <Image
          src="/blue_sky.jpg"
          style={{ zIndex: "-15" }}
          alt="BG"
          width={3840}
          height={2160}
        />
      </div>
      <HomeSearch />
      <div className="flex flex-col flex-wrap w-full mt-[-550px] bg-white basis-full">
        <div className="flex flex-row">
          <div className="basis-1/5"></div>
          <div className="basis-3/5 mt-[40px] flex-row flex">
            <h1 className="flex flex-row flex-wrap w-1/3">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg> */}
              <span className="text-[3rem] font-bold">1</span>
              <span className="leading-[3.3rem] self-end text-[1.3rem]">
                Elastyczna umowa wynajmu!
              </span>
              <p>
                Większość rezerwacji można odwołać lub zmienić bezpłatnie do 48
                godzin przed odbiorem samochodu.
              </p>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
