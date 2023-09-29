import { NextRequest, NextResponse } from "next/server";
import './route.extensions'
type Parametr = {
  name: string;
  price: number;
  age: number;
  engine: boolean;
  src?: any;
};
type Data_f = {
  price: [number, number],
  age: [number, number],
  engine: boolean
}
const cars_data: Parametr[] = [
  {
    name: "Audi S6",
    price: 150000,
    age: 2021,
    engine: false,
  },
  {
    name: "Bmw series 3",
    age: 2018,
    price: 98000,
    engine: false,
    src: "3.jpg",
  },
  {
    name: "Bmw series 750d",
    price: 300000,
    age: 2009,
    engine: true,
    src: "3.jpg",
  },
];
export async function GET() {
  const res = { cars: cars_data};
  return NextResponse.json(res);
}

export async function POST(request: NextRequest) {
  const data: Data_f = await request.json();
  console.log(`-------------- Data info: \n`, data);
  let filteredAged: Array<Parametr> = [];
  let result: Array<Parametr> = [];
  let result_price: Array<Parametr> = [];
  let result_age: Array<Parametr> = [];

    // if (data.price?.[0] > 0 || data.price?.[1] > 0) {
    //   result_price = cars_data.filter((item) => {
    //     return (
    //       item.price >= Number(data.price?.[0]) &&
    //       item.price <= Number(data.price?.[1])
    //     );
    //   });
    // }
    // console.log("price", result_price);
    // if (data?.age?.[1] > 0 || data?.age?.[0] > 0) {
    //   result_age = cars_data.filter((i) => {
    //     return i.age >= data.age?.[0] && i.age <= data.age?.[1];
    //   });
    // }
    // console.log("age", result_age);
    // if(data.price?.[0] && data.price?.[1] && data.age?.[0] && data.age?.[1]){
    //   console.log("Szukanie aut z pełnymi danymi wyszukiwania")
    //   result = cars_data.filter((car) => {
    //     return data.price[0] < car.price && data.price[1] > car.price && data.age[0] < car.age && data.age[1] > car.age;
    //   })
    // }
    // if (
    //   data.price?.[1] === 0 &&
    //   data.age?.[1] === 0 &&
    //   data.price?.[0] === 0 &&
    //   data.age?.[0] === 0
    // ) {
    //   result = cars_data;
    // } else {
    //   // result = result_price.concat(
    //   //   result_age.filter((i) => result_price.indexOf(i) < 0)
    //   // );
    // }
    // if (result.length > 0) {
    //   result = cars_data.filter((i) => {
    //     return i.engine === data?.type;
    //   });
    // }

    // Walidacja danych. Sprawdź czy cokolwiek jest podane.
    if(!data.price[0].isEmpty() || !data.price?.[0].isEmpty() || !data.age[0].isEmpty() || data.age[0] === 2023){
      console.log("Dane są podane")
      result = cars_data.filter((car) => {
        return data.price[0] < car.price && data.price[1] > car.price && data.age[0] < car.age && data.age[1] > car.age
      })
      console.log(result)
      // poniżej if, sprawdzający czy jest podany tylko jeden zakres. Price
    }else if(!data.price[0].isEmpty() || !data.price[0].isEmpty() && (data.age[0].isEmpty() || data.age[1].isEmpty())){
      result = cars_data.filter((car) => {
        return data.price[0] < car.price && data.price[1] > car.price
      })
      // Poniżej if, sprawdzający czy jest podany tylko jeden zakres. Age
    }else if(!data.age[0].isEmpty() || !data.age[1].isEmpty() && (data.price[0].isEmpty() || data.price[1].isEmpty())){
      result = cars_data.filter((car) => {
        return data.age[0] < car.age && data.age[1] > car.age
      })
    }

  console.log(result);

  //   console.log(FilteredPrice, data.price?.[1]);
  return NextResponse.json(result);
}


// Sprawdzanie filtrów przy założeniu, że Wszystkie dane są podane. Filtracja zakresów.
// if(f_price[0] < i.price && f_price[1] > i.price && f_age[0] < i.age && f_age[1] > i.age)


// Sprawdzanie filtrów przy założeniu, że mamy tylko pojedyńcze dane. Filtracja zakresów
