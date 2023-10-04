async function getCars() {
  // const res = await fetch("http://localhost:3000/api/cars");
  // return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();
  return (
    <>
      {/* @ts-ignore */}
      <p>{cars?.res}</p>
    </>
  );
}
