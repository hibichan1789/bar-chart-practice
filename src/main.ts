// src/main.ts
import type { IceCreamSales } from "./interface/iceream";
import { fetchAPIData } from "./api/fetchData";
import { renderBarChart } from "./chart/renderChart";
import { generateIceCreamChartData, generateIceCreamSortedChartData } from "./chart/iceCream";

let cachedData:IceCreamSales[];

function initCanvas(iceCreamSales:IceCreamSales[], label:string, canvas:HTMLCanvasElement) {
  const iceCreamChartData = generateIceCreamChartData(iceCreamSales, "アイス月間売上");
  renderBarChart(iceCreamChartData, label, canvas);
}
function sortedCanvas(iceCreamSales:IceCreamSales[], label:"売上昇順"|"売上降順", canvas:HTMLCanvasElement, isAsc:boolean){
  const sortedIceCreamData = generateIceCreamSortedChartData(iceCreamSales, "アイス月間売上", isAsc);
  renderBarChart(sortedIceCreamData, label, canvas);
}
async function init() {
  const canvas = document.querySelector("#ice-cream-canvas") as HTMLCanvasElement;
  const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;
  const apiUrl = "data/icecream.json";
  try{
    cachedData = await fetchAPIData<IceCreamSales[]>(apiUrl);
  }
  catch(error){
    console.error(String(error));
    errorMessage.textContent = "データの取得に失敗しました";
    return;
  }
  initCanvas(cachedData, "月間売上", canvas);
  const sortButton = document.querySelector("#sort-button") as HTMLButtonElement;
  sortButton.addEventListener("click", ()=>{
    const isAsc = sortButton.classList.toggle("asc")
    if(isAsc){
      sortedCanvas(cachedData, "売上昇順", canvas, isAsc);
      sortButton.textContent = "降順にする";
    }
    else{
      sortedCanvas(cachedData, "売上降順", canvas, isAsc);
      sortButton.textContent = "昇順にする";
    }
  });
}
document.addEventListener("DOMContentLoaded", init);