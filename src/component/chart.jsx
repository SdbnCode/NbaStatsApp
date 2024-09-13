import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  if (!data) {
    return null;
  }

  const totalStats = data.reduce(
    (acc, item) => {
      acc.points += item.points;
      acc.assists += item.assists;
      acc.totalRb += item.totalRb;
      acc.steals += item.steals;
      acc.blocks += item.blocks;
      acc.fieldGoals += item.fieldGoals;
      acc.ft += item.ft;
      return acc;
    },
    {
      points: 0,
      assists: 0,
      totalRb: 0,
      steals: 0,
      blocks: 0,
      fieldGoals: 0,
      ft: 0,
    }
  );

  const chartLabels = [
    "Points",
    "Assists",
    "Rebounds",
    "Steals",
    "Blocks",
    "Field Goals",
    "Free Throws",
  ];

  const chartValues = [
    totalStats.points,
    totalStats.assists,
    totalStats.totalRb,
    totalStats.steals,
    totalStats.blocks,
    totalStats.fieldGoals,
    totalStats.ft,
    totalStats.playerName,
    totalStats.season,
  ];

  console.log(data);
  console.log(chartValues);

  const chart = {
    labels: chartLabels,
    datasets: [
      {
        label: `${data[0].playerName}`,
        data: chartValues,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: `${data[0].playerName}`,
        data: chartValues.map(
          (value) => value + Math.floor(Math.random() * 100) - 50
        ),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: `${data[0].playerName} - ${data[0].season} Season Stats`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={chart} options={chartOptions} />
    </div>
  );
};

export default BarChart;
