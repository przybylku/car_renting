import { NextRequest, NextResponse } from "next/server";

type Parametr = {
  name: string;
  price: number;
  age: number;
  engine: boolean;
  src?: any;
};

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
  const res = { a: "a" };
  return NextResponse.json({ data: res });
}

export async function POST(request: NextRequest) {
  let data = await request.json();
  console.log(data);
  let filteredAged: Array<Parametr> = [];
  let result: Array<Parametr> = [];
  result = cars_data.filter((item) => {
    return (
      item.price >= Number(data.price?.[0]) &&
      item.price <= Number(data.price?.[1])
    );
  });
  console.log(result);
  if (result.length > 0 && data?.age?.[1] > 0) {
    result = result.filter((i) => {
      i.age >= data.age?.[0] && i.age <= data.age?.[1];
    });
  }
  console.log(result);
  if (result.length > 0) {
    result = result.filter((i) => {
      return i.engine === data?.type;
    });
  }
  console.log(result);
  //   console.log(FilteredPrice, data.price?.[1]);
  return NextResponse.json(result);
}
