"use client";

import { Suspense, useEffect, useState } from "react";
import RenderImage from "./RenderImage";
import Image from "next/image";
import { Parametr } from "@/app/api/cars/route";
import { UserIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  orderType,
  selectOrder,
  setCarId,
} from "@/app/store/featues/orderSlice";
interface Props {
  price: [number, number];
  age: [number, number];
  type: boolean;
}

async function getCars(
  price: [number, number],
  age: [number, number],
  type: boolean
) {
  const res = await fetch("http://localhost:3000/api/cars", {
    method: "POST",
    body: JSON.stringify({
      price: price,
      age: age,
      type: type,
    }),
  });
  return await res.json();
}

export default function FiltredList(props: Props) {
  const { price, age, type } = props;
  const [cars, setCars] = useState<Parametr[]>([]);
  const order: orderType = useAppSelector(selectOrder);
  const dispatch = useAppDispatch();
  const days: number | undefined =
    Number(order?.returnDate?.split("-")[2]) -
    Number(order?.pickupDate?.split("-")[2]);
  const { push } = useRouter();
  useEffect(() => {
    const cars_a = getCars(price, age, type);
    cars_a.then((a) => setCars(a));
  }, [props]);

  return (
    <>
      <div className="flex flex-row flex-wrap basis-1/2 justify-items-center justify-center">
        {cars.length !== 0 ? (
          cars.map((item) => {
            return (
              <Suspense fallback={<>Loading...</>}>
                {" "}
                <div className="offert-box">
                  <Image
                    style={{ width: "25%" }}
                    className="rounded-md basis-1/4"
                    src={`/${item.src}`}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <div className="flex flex-col flex-nowrap h-[50%] basis-4/6">
                    <p className="flex flex-row p-4 text-[1.5rem]">
                      {item?.name}
                    </p>
                    <div className="flex flex-row flex-nowrap pl-3 justify-start">
                      <p className="flex flex-row px-1 basis-auto text-[0.9rem]">
                        <UserIcon className="w-5 h-5 mr-1" />
                        {item.seats} siedzeń
                      </p>
                      <p className="flex flex-row px-1 basis-auto text-[0.9rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000"
                          className="w-5 h-5 mr-1"
                          data-name="Flat Color"
                          viewBox="0 0 24 24"
                        >
                          <g>
                            <path
                              fill="#000"
                              d="M19 2h-6.59a2 2 0 00-1.41.59L3.59 10A2 2 0 003 11.41V20a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm0 8H6.41l6-6H19z"
                            ></path>
                            <path
                              fill="#2ca9bc"
                              d="M18 14h-3a1 1 0 010-2h3a1 1 0 010 2z"
                            ></path>
                          </g>
                        </svg>
                        {item.doors} drzwi
                      </p>
                      <p className="flex flex-row px-1 basis-auto text-[0.9rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#000"
                          version="1.1"
                          viewBox="0 0 512 512"
                          xmlSpace="preserve"
                          className="w-5 h-5 mr-1"
                        >
                          <path d="M448 387.654V124.346c24.858-8.784 42.667-32.474 42.667-60.346 0-35.355-28.645-64-64-64-35.355 0-64 28.645-64 64 0 27.872 17.808 51.562 42.667 60.346v110.321h-128V124.346C302.192 115.562 320 91.872 320 64c0-35.355-28.645-64-64-64s-64 28.645-64 64c0 27.872 17.808 51.562 42.667 60.346v110.321h-128V124.346c24.858-8.784 42.667-32.474 42.667-60.346 0-35.355-28.645-64-64-64s-64 28.645-64 64c0 27.872 17.808 51.562 42.667 60.346V256c0 11.782 9.551 21.333 21.333 21.333h149.333v110.321C209.808 396.438 192 420.128 192 448c0 35.355 28.645 64 64 64s64-28.645 64-64c0-27.872-17.808-51.562-42.667-60.346V277.333h128v110.321c-24.858 8.784-42.667 32.474-42.667 60.346 0 35.355 28.645 64 64 64 35.355 0 64-28.645 64-64 .001-27.872-17.808-51.562-42.666-60.346zM426.667 42.667C438.458 42.667 448 52.209 448 64s-9.542 21.333-21.333 21.333S405.333 75.791 405.333 64s9.542-21.333 21.334-21.333zm-170.667 0c11.791 0 21.333 9.542 21.333 21.333S267.791 85.333 256 85.333c-11.791 0-21.333-9.542-21.333-21.333S244.209 42.667 256 42.667zm-170.667 0c11.791 0 21.333 9.542 21.333 21.333s-9.542 21.333-21.333 21.333S64 75.791 64 64s9.542-21.333 21.333-21.333zM256 469.333c-11.791 0-21.333-9.542-21.333-21.333s9.542-21.333 21.333-21.333c11.791 0 21.333 9.542 21.333 21.333s-9.542 21.333-21.333 21.333zm170.667 0c-11.791 0-21.333-9.542-21.333-21.333s9.542-21.333 21.333-21.333S448 436.209 448 448s-9.542 21.333-21.333 21.333z"></path>
                        </svg>
                        {item.gearbox}
                      </p>
                      <p className="flex flex-row px-1 basis-auto text-[0.9rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 mr-1"
                        >
                          <path
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 8V5m-3 0h6M6 12H3m0-3v6m18-4v8M9 12h.01M12 12h.01M15 12h.01M6 8v8h2l2 3h8v-9l-2-2H6z"
                          ></path>
                        </svg>
                        {!item.engine ? "Benzyna" : "Diesel"}
                      </p>
                      <p className="flex flex-row px-1 basis-auto text-[0.9rem]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                        {item?.age}{" "}
                        <span className="text-[0.8rem] leading-1"></span>
                      </p>
                    </div>
                    <div className="flex flex-row flex-nowrap pl-3 justify-start mt-3">
                      <p className="bg-blue-700 text-white uppercase flex flex-row p-1 text-[0.8rem] rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#fcff2e"
                          stroke="#fcff2e"
                          version="1.1"
                          viewBox="0 0 24 24"
                          xmlSpace="preserve"
                          className="h-5 w-5 mr-1"
                        >
                          <g>
                            <path d="M19.3 5.3L9 15.6l-4.3-4.3-1.4 1.4 5 5 .7.7.7-.7 11-11-1.4-1.4z"></path>
                            <path
                              d="M0 0H24V24H0z"
                              className="st0"
                              style={{ fill: "none" }}
                            ></path>
                          </g>
                        </svg>
                        Nagroda samochodu roku!
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap mt-2 basis-full">
                    <hr className="w-full basis-full border-b-[1px] rounded-sm" />{" "}
                    <div className="flex flex-row w-full justify-center ">
                      <div className="flex flex-col basis-1/3">
                        <p className="flex flex-col flex-wrap justify-center content-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000"
                            version="1.1"
                            viewBox="0 1 15 15"
                            className="w-10 h-10 mr-1 basis-[90%]"
                          >
                            <path d="M13 6v5.5a.5.5 0 01-1 0v-2A1.5 1.5 0 0010.5 8H9V2a1 1 0 00-1-1H2a1 1 0 00-1 1v11a1 1 0 001 1h6a1 1 0 001-1V9h1.5a.5.5 0 01.5.5v2a1.5 1.5 0 003 0V5a1 1 0 00-1-1V2.49a.5.5 0 00-.5-.49.51.51 0 00-.5.55V5a1 1 0 101-1M8 6.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v3z"></path>
                          </svg>{" "}
                          <span className="basis-1/3 font-bold text-[0.8rem] mb-[-10px]">
                            Polityka Paliwa
                          </span>
                          <span className="basis-1/3 text-[0.85rem]">
                            do tego samego poziomu
                          </span>
                        </p>
                        <p className="flex flex-col flex-wrap justify-center content-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 20"
                            className="w-10 h-10 mr-1 basis-[90%]"
                          >
                            <path
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6h.01M9 20l-6-3V4l2 1m4 15l6-3m-6 3v-6m6 3l6 3V7l-2-1m-4 11v-3m0-7.8c0 1.767-1.5 3.2-3 4.8-1.5-1.6-3-3.033-3-4.8S10.343 3 12 3s3 1.433 3 3.2z"
                            ></path>
                          </svg>
                          <span className="basis-1/3 font-bold text-[0.8rem] mb-[-5px]">
                            Miejsce odbioru
                          </span>
                          <span className="basis-1/3 text-[0.85rem]">
                            {order.pickupLocation}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col basis-1/3 mt-2">
                        <p className="flex py-1 flex-row text-[0.9rem] align-middle justify-start leading-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#0f3"
                            stroke="#0f3"
                            version="1.1"
                            viewBox="-2.4 -2.4 16.8 16.8"
                            xmlSpace="preserve"
                            className="mr-1"
                          >
                            <path
                              fill="#1D1D1B"
                              d="M5 9.8535156L0 4.8535156 0.7070313 4.1464844 5 8.4394531 11.2929688 2.1464844 12 2.8535156z"
                            ></path>
                          </svg>{" "}
                          Nielimitowane kilometry
                        </p>
                        <p className="flex py-1 flex-row align-middle justify-start text-[0.9rem] leading-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#0f3"
                            stroke="#0f3"
                            version="1.1"
                            viewBox="-2.4 -2.4 16.8 16.8"
                            xmlSpace="preserve"
                            className="mr-1"
                          >
                            <path
                              fill="#1D1D1B"
                              d="M5 9.8535156L0 4.8535156 0.7070313 4.1464844 5 8.4394531 11.2929688 2.1464844 12 2.8535156z"
                            ></path>
                          </svg>{" "}
                          Darmowe ubezpieczenie
                        </p>
                        <p className="flex py-1 flex-row align-middle justify-start text-[0.9rem] leading-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#0f3"
                            stroke="#0f3"
                            version="1.1"
                            viewBox="-2.4 -2.4 16.8 16.8"
                            xmlSpace="preserve"
                            className="mr-1"
                          >
                            <path
                              fill="#1D1D1B"
                              d="M5 9.8535156L0 4.8535156 0.7070313 4.1464844 5 8.4394531 11.2929688 2.1464844 12 2.8535156z"
                            ></path>
                          </svg>{" "}
                          Ochrona od kradzieży
                        </p>
                      </div>
                      <div className="flex flex-row basis-1/3 justify-evenly items-center">
                        <p className="flex flex-col text-[0.8rem]">
                          Koszt wynajmu na {days} dni{" "}
                          <span className="text-[2rem]">
                            {item.price * days} zł
                          </span>
                        </p>
                        <div
                          className="flex w-[33%] h-min p-3 rounded-sm text-center bg-green-500 "
                          onClick={() => {
                            dispatch(setCarId(item.id));
                            return push("/order");
                          }}
                        >
                          <p className="text-center w-full align-middle justify-center self-center">
                            Wynajmij
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Suspense>
            );
          })
        ) : (
          <div
            style={{
              flex: "1",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1 className="text-[2rem]"> Brak wyników wyszukiwania</h1>
            <p>
              Spróbuj użyć mniejszej liczby filtrów, aby uzyskać więcej wyników.
            </p>
          </div>
        )}
        {/* <>{price ? price : "none"}</> */}
        {/* <div className="fixed top-[100px] bg-palette-100 h-auto w-[400px] left-3 p-4 rounded-md">
          <p className="text-bold text-[1.2rem]">Zamówienie</p>
          <p>Data odbioru: {order.pickupDate}</p>
          <p>Data zwrotu: {order.returnDate}</p>
          <p>Miejsce odbioru: {order.pickupLocation}</p>
        </div> */}
      </div>
    </>
  );
}
