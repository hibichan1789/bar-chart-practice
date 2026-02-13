// src/main.ts
import type { IceCreamSales } from "./interface/iceream";
import { fetchAPIData } from "./api/fetchData";


const apiUrl = "data/icecream.json";

const iceCreamSales:IceCreamSales[] = await fetchAPIData<IceCreamSales[]>(apiUrl);
console.log(iceCreamSales); 