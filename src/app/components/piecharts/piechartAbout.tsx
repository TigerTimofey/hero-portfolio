"use client";
import React, { useEffect } from "react";

function PieChart() {
  useEffect(() => {
    import("chart.js/auto").then(({ Chart }) => {
      const ctx = document.getElementById("aboutMe") as HTMLCanvasElement;

      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }
      const data = {
        labels: [
          "53% SOFTWARE DEVELOPER",
          "5% SUSHI MASTER",
          "40% LOVING HUSBAND & FATHER",
          "2% GRATUITOUS CAT FEEDER",
        ],

        datasets: [
          {
            data: [50, 5, 40, 2],

            backgroundColor: [
              "rgb(255, 205, 86)",
              "rgb(58, 132, 126)",
              "rgb(255, 99, 132)",

              "rgb(25, 180, 242)",
            ],
            hoverOffset: 8,
            offset: 10,
            hoverBackgroundColor: ["#4f4a6a"],
            borderColor: ["#4f4a6a"],
            hoverBorderColor: ["#ffffff"],
            borderDashOffset: 8,
            animateRotate: true,
          },
        ],
      };
      new Chart(ctx, {
        type: "doughnut",
        data: data,
      });
    });
  }, []);

  return (
    <div>
      <canvas id="aboutMe"></canvas>
    </div>
  );
}

export default PieChart;
