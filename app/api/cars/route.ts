import { NextRequest, NextResponse } from "next/server";
import "./route.extensions";
export type Parametr = {
  id: number,
  name: string;
  price: number;
  age: number;
  engine: boolean;
  src?: any;
  seats: number;
  doors: number;
  gearbox: "Manualna" | "Automatyczna";
};
type Data_f = {
  price: [number, number];
  age: [number, number];
  engine: boolean;
};
const cars_data: Parametr[] = [
  {
    id: 1,
    name: "Audi S6",
    price: 200,
    age: 2021,
    engine: false,
    seats: 5,
    doors: 5,
    gearbox: "Automatyczna",
    src: "mclaren.jpg",
  },
  {
    id: 2,
    name: "Bmw series 3",
    age: 2018,
    price: 512,
    engine: false,
    src: "3.jpg",
    seats: 5,
    doors: 5,
    gearbox: "Automatyczna",
  },
  {
    id: 3,
    name: "Bmw series 750d",
    price: 332,
    age: 2009,
    engine: true,
    src: "3.jpg",
    seats: 5,
    doors: 5,
    gearbox: "Automatyczna",
  },
];
export async function GET(request: NextRequest) {
  const params: number = Number(request.nextUrl.searchParams.get('id'))
  const res = cars_data.filter((i) => i.id === params)
  return NextResponse.json({res});
}

export async function POST(request: NextRequest) {
  const data: Data_f = await request.json();
  console.log(`-------------- Data info: \n`, data);
  let result: Array<Parametr> = [];
  // Walidacja danych. Sprawdź czy cokolwiek jest podane.
  if (
    !data.price[0].isEmpty() ||
    !data.price?.[0].isEmpty() ||
    !data.age[0].isEmpty() ||
    data.age[0] === 2023
  ) {
    console.log("Dane są podane");
    result = cars_data.filter((car) => {
      return (
        data.price[0] < car.price &&
        data.price[1] > car.price &&
        data.age[0] < car.age &&
        data.age[1] > car.age
      );
    });
    console.log(result);
    // poniżej if, sprawdzający czy jest podany tylko jeden zakres. Price
  } else if (
    !data.price[0].isEmpty() ||
    (!data.price[0].isEmpty() &&
      (data.age[0].isEmpty() || data.age[1].isEmpty()))
  ) {
    result = cars_data.filter((car) => {
      return data.price[0] < car.price && data.price[1] > car.price;
    });
    // Poniżej if, sprawdzający czy jest podany tylko jeden zakres. Age
  } else if (
    !data.age[0].isEmpty() ||
    (!data.age[1].isEmpty() &&
      (data.price[0].isEmpty() || data.price[1].isEmpty()))
  ) {
    result = cars_data.filter((car) => {
      return data.age[0] < car.age && data.age[1] > car.age;
    });
  }

  // console.log(result);
  return NextResponse.json(result);
}

// Sprawdzanie filtrów przy założeniu, że Wszystkie dane są podane. Filtracja zakresów.
// if(f_price[0] < i.price && f_price[1] > i.price && f_age[0] < i.age && f_age[1] > i.age)

// Sprawdzanie filtrów przy założeniu, że mamy tylko pojedyńcze dane. Filtracja zakresów
