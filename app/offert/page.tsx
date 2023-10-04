/**
 * TODO:
 * - Filtry - Cena, Rocznik, Benzyna/diesel
 *
 */
"use client";
import FiltredList from "@/components/FiltredList";
import Modal from "@/components/Modal";
import { useState } from "react";
import { useAppSelector } from "../store";
import { selectOrder } from "../store/featues/orderSlice";
enum Filters {
  PRICE,
  AGE,
  ENGINE,
}
interface FilterChange {
  filter: Filters;
  payload: [number, number];
  engine?: boolean;
}

export default function OffertPage() {
  const [f_price, set_f_price] = useState<[number, number]>([0, 1000000]);
  const [f_age, set_f_age] = useState<[number, number]>([0, 2023]);
  const [f_engine, set_f_engine] = useState<boolean>(false); // true - Benzyna // false - diesel
  const [modal_show, setModal_show] = useState<boolean>(true); // Pokazywanie modalu
  const order = useAppSelector(selectOrder)
  const handleModal = (show: boolean) => {
    return setModal_show(show);
  };
  const handleFilterChange = (props: FilterChange) => {
    console.log(props);
    switch (props.filter) {
      case Filters.PRICE:
        console.info("changing info PRICE");
        if (props.payload?.[0] !== f_price[0]) {
          set_f_price([props.payload[0], f_price[1]]);
        }
        if (props.payload?.[1] !== f_price[1]) {
          set_f_price([f_price[0], props.payload[1]]);
        }
        console.log("f_price: ");
        console.log(f_price);
        break;
      case Filters.AGE:
        console.info("changing info age");
        if (props.payload?.[0] !== f_age[0]) {
          set_f_age([props.payload[0], f_age[1]]);
        }
        if (props.payload?.[1] !== f_age[1]) {
          set_f_age([f_age[0], props.payload[1]]);
        }
        console.log("f_age: ");
        console.log(f_age);
        break;
    }

    // console.log("f_price: ");
    // console.log(f_price);
  };
  return (
    <>
      {modal_show ? (
        <Modal
          fn={handleModal}
          show={modal_show}
          close={true}
          content="W sekcji wyszukiwania potrzebne są wszystkie dane!"
          title={"Informacja"}
        />
      ) : (
        <></>
      )}
      {/* Filtry */}
      <div className="flex flex-col flex-wrap justify-center align-middle w-full">
        <div className="align-middle basis-3/5 flex flex-row flex-wrap w-full mt-10 justify-center">
          <div className="flex w-full justify-center flex-row basis-full justify-center h-[auto] mb-5">
            <div className=" border-2 border-palette-200 p-3 rounded-md min-w-[600px] flex flex-row flex-nowrap">
              <div className="flex-col flex basis-1/3 flex-nowrap">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                  {order?.pickupLocation}
                </p>{" "}
                <p className="text-[0.8rem] text-center tracking-tight">
                  {order?.pickupDate}, 10:00
                </p>
              </div>
              <p className="m-[15px] text-center ml-4 text-[1.3rem] leading-5 font-bold">
                &#62;
              </p>
              <div className="flex-col flex basis-1/3">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                  {order?.pickupLocation}
                </p>{" "}
                <p className="text-[0.8rem] text-center tracking-tight">
                  {order?.returnDate}, 10:00
                </p>
              </div>
              <p className="m-[15px] ml-4 text-[1.3rem] leading-5 font-bold">
                &#62;
              </p>
              <div className="flex-col flex basis-1/3 justify-center">
                <p className="font-bold text-center text-[1.1rem] mb-2">
                  Wybierz auto
                </p>{" "}
                {/* <p className="text-[0.8rem] text-center tracking-tight">
                  {order.pickupDate}, 10:00
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-1/5 items-end bg-white rounded-md">
            <div className="filter-box">
              <p id="p">Cena</p>
              <p>Od</p>
              <input
                onChange={(event) => {
                  handleFilterChange({
                    filter: Filters.PRICE,
                    payload: [Number(event.currentTarget.value), f_price?.[1]],
                  });
                }}
                value={f_price[0]}
                type="number"
              ></input>
              <p>Do</p>
              <input
                onChange={(event) => {
                  handleFilterChange({
                    filter: Filters.PRICE,
                    payload: [f_price?.[0], Number(event.currentTarget.value)],
                  });
                }}
                value={f_price[1]}
                type="number"
              ></input>
              {/* <input type="range" /> maybe pozniej */}
            </div>
            <div className="filter-box">
              <p id="p">Rok produkcji</p>
              <p>Od</p>
              <input
                onChange={(event) => {
                  handleFilterChange({
                    filter: Filters.AGE,
                    payload: [Number(event.currentTarget.value), f_age?.[1]],
                  });
                }}
                type="number"
                value={f_age[0]}
              ></input>
              <p>Do</p>
              <input
                onChange={(event) => {
                  handleFilterChange({
                    filter: Filters.AGE,
                    payload: [f_age?.[1], Number(event.currentTarget.value)],
                  });
                }}
                value={f_age[1]}
                type="number"
              ></input>
            </div>
            <div className="filter-box">
              <p>Engine Typ</p>
            </div>
          </div>
          <FiltredList price={f_price} age={f_age} type={f_engine} />
        </div>
      </div>
    </>
  );
}
