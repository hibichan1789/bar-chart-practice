// src/chart/iceCream.ts
import type { ChartData } from "chart.js/auto";
import type { IceCreamSales } from "../interface/iceream";

export function generateIceCreamChartData(iceCreamSales:IceCreamSales[], label:string):ChartData<"bar">{
    const labels = iceCreamSales.map(iceCream=>iceCream.flavor);
    const data = iceCreamSales.map(iceCream=>iceCream.sales);
    const backgroundColor = iceCreamSales.map(iceCream=>iceCream.backgroundColor);
    return {
        labels,
        datasets:[{
            data,
            label,
            backgroundColor
        }]
    }
}
export function generateIceCreamSortedChartData(
        iceCreamSales:IceCreamSales[],
        label:string,
        isAsc:boolean
        ):ChartData<"bar">{
    const tmpSales = structuredClone(iceCreamSales);
    const sortVal = isAsc ? 1 : -1;
    const sortedSales = tmpSales.sort((iceCream1, iceCream2)=> sortVal*(iceCream1.sales - iceCream2.sales));
    return generateIceCreamChartData(sortedSales, label);
}