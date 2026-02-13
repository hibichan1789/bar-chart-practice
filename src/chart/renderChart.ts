// src/chart/renderChart.ts
import { Chart } from "chart.js/auto";
import type { ChartConfiguration, ChartData } from "chart.js/auto";

export function renderBarChart(chartData:ChartData<"bar">, chartTitle:string, canvas:HTMLCanvasElement):void{
    const renderedChart = Chart.getChart(canvas);
    if(renderedChart){
        renderedChart.destroy();
    }
    const chartConfig:ChartConfiguration<"bar"> = {
        type: "bar",
        data: chartData,
        options:{
            plugins:{
                
                title:{
                    display:true,
                    text:chartTitle
                }
            }
        }
    }
    new Chart(canvas, chartConfig);
}