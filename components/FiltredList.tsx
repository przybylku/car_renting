import { Suspense, useEffect, useState } from "react";

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
  const res = await fetch("https://humble-waddle-7pj7pp7g57736p7-3000.app.github.dev/api/cars", {
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
                  Name: {item?.name}
                  <br />
                  Price: ${item?.price} <br /> Age: {item?.age}
                </div>
              </Suspense>
            );
          })
        ) : (
          <div style={{flex: "1", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
            <h1 className="text-[2rem]">  Brak wyników wyszukiwania</h1>
            <p>Spróbuj użyć mniejszej liczby filtrów, aby uzyskać więcej wyników.</p>
          </div>
        )}
        {/* <>{price ? price : "none"}</> */}
      </div>
    </>
  );
}
