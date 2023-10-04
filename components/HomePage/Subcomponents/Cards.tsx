import {
  BestDeals,
  BookWith,
  EcoFriendly,
  PriceTransparency,
} from "@/components/svg";

import React from "react";

type cardType = {
  title: string;
  description: string;
  icon: React.JSX.Element;
};

const cards: cardType[] = [
  {
    title: "Best deals on cars",
    description: "See deals from rental companies in 70,000+ locations.",
    icon: <BestDeals />,
  },
  {
    title: "Price transparency",
    description: "See the total cost up front so there are no surprises.",
    icon: <BookWith />,
  },
  {
    title: "Book with flexibility",
    description: "Find cars with free cancellation and enhanced cleaning.",
    icon: <EcoFriendly />,
  },
  {
    title: "Eco-friendly options",
    description: "Filter your search to easily see hybrids and electric cars.",
    icon: <PriceTransparency />,
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
