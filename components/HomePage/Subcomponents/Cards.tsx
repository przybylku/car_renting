import {
  BestDeals,
  BookWith,
  PriceTransparency,
  EcoFriendly,
} from "@/components/svg";

import React from "react";

type cardType = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

const cards: cardType[] = [
  {
    title: "Najlepsze oferty na samochody",
    description:
      "Zobacz oferty od firm wynajmujących w ponad 70 000 lokalizacjach.",
    icon: <BestDeals />,
  },
  {
    title: "Przejrzystość cen",
    description:
      "Zobacz całkowity koszt z góry, aby nie było żadnych niespodzianek.",
    icon: <BookWith />,
  },
  {
    title: "Rezerwuj z elastycznością",
    description:
      "Znajdź samochody z możliwością darmowej anulacji i ulepszonego sprzątania.",
    icon: <PriceTransparency />,
  },
  {
    title: "Przyjazne sortowanie",
    description:
      "Filtruj swoje wyszukiwanie, aby łatwo znaleźć silniki diesel'a lub silniki benzynowe.",
    icon: <EcoFriendly />,
  },
];

export default async function Cards() {
  return (
    <>
      {cards.map((card: cardType, index: number) => (
        <div key={index} className="card">
          <div className="svg">{card.icon}</div>
          <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
