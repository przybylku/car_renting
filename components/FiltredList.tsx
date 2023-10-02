import { Suspense, useEffect, useState } from "react";
import RenderImage from "./RenderImage";
import { useOrderStore } from "@/app/store/zustand";

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
type Parametr = {
  name: string;
  price: number;
  age: number;
  engine: boolean;
  src?: any;
};

export default function FiltredList(props: Props) {
  const { price, age, type } = props;
  const [cars, setCars] = useState<Parametr[]>([]);
  const order = useOrderStore((state) => state);
  useEffect(() => {
    const cars_a = getCars(price, age, type);
    cars_a.then((a) => setCars(a));
  }, [props]);

  return (
    <>
      <div className="flex flex-row flex-wrap w-full mt-[50px] justify-items-center justify-center">
        {cars.length !== 0 ? (
          cars.map((item) => {
            return (
              <Suspense fallback={<>Loading...</>}>
                {" "}
                <div className="offert-box">
                  <RenderImage
                    url={`/${item.src}`}
                    alt=""
                    width={160}
                    height={100}
                  />
                  Name: {item?.name}
                  <br />
                  Price: ${item?.price} <br /> Age: {item?.age}
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
        <div className="fixed top-[100px] bg-palette-100 h-auto w-[400px] left-3 p-4 rounded-md">
          <p className="text-bold text-[1.2rem]">Zamówienie</p>
          <p>Data odbioru: {order.pickupDate}</p>
          <p>Data zwrotu: {order.returnDate}</p>
          <p>Miejsce odbioru: {order.pickupLocation}</p>
        </div>
      </div>
    </>
  );
}
