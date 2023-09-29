/**
 * TODO:
 * - Filtry - Cena, Rocznik, Benzyna/diesel
 *
 */
"use client";
import FiltredList from "@/components/FiltredList";
import Modal from "@/components/Modal";
import { useState } from "react";
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
  const [f_price, set_f_price] = useState<[number, number]>([0, 0]);
  const [f_age, set_f_age] = useState<[number, number]>([0, 2023]);
  const [f_engine, set_f_engine] = useState<boolean>(false); // true - Benzyna // false - diesel
  const [modal_show, setModal_show] = useState<boolean>(true) // Pokazywanie modalu
  const handleModal = (show: boolean) => {
    return setModal_show(show)
  }
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

      {modal_show ? <Modal fn={handleModal} show={modal_show} close={true} content="W sekcji wyszukiwania potrzebne są wszystkie dane!" title={"Informacja"}/> : <></>}
      {/* Filtry */}
      <div className="flex flex-col flex-wrap justify-center align-middle w-full">
        <div className="align-middle justify-center basis-3/5 flex flex-row flex-wrap w-full mt-10">
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
    </>
  );
}
