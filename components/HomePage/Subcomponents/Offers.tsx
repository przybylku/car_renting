import React from "react";
import { Check } from "@/components/svg";

const offers: string[] = [
  "Bezpłatne odwołanie większości rezerwacji",
  "Ponad 60 000 lokalizacji",
  "Najlepsza obsługa klienta",
];

export default async function Offers() {
  return (
    <>
      {offers.map((offer: string, index: number) => (
        <div key={index} className="flex">
          <Check />
          <p className="text-white">{offer}</p>
        </div>
      ))}
    </>
  );
}
