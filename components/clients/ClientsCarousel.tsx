import React, { useEffect } from "react";
import { Clients } from "./Clients";

interface Item {
  name: string;
}

const items: Item[] = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "11" },
  { name: "12" },
];

export const ClientsCarousel: React.FC = () => {
  return (
    <div className="slide">
      {items.map((item, index) => (
        <Clients key={index} name={item.name} />
      ))}
    </div>
  );
};
