import { createContext, type ReactElement } from "react";

export type productType = {
  sku: string;
  name: string;
  price: number;
};

const initState: productType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type userProductContextType = { products: productType[] };
const initContextState: userProductContextType = { products: [] };
const productsContext = createContext<userProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
