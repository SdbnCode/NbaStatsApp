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

const BarChart = ({ data1, data2 }) => {
  if (!data1 || !data2 || !data1.length || !data2.length) {
    return null;
  }
  //Combine the data for the first player if they played on multiple teams
  const totalStatsPlayer1 = data1.reduce(
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

  //Set the labels for the chart
  const chartLabels = [
    "Points",
    "Assists",
    "Rebounds",
    "Steals",
    "Blocks",
    "Field Goals",
    "Free Throws",
  ];

  //Set the chart values for player 1's stats
  const chartValuesPlayer1 = [
    totalStatsPlayer1.points,
    totalStatsPlayer1.assists,
    totalStatsPlayer1.totalRb,
    totalStatsPlayer1.steals,
    totalStatsPlayer1.blocks,
    totalStatsPlayer1.fieldGoals,
    totalStatsPlayer1.ft,
    totalStatsPlayer1.playerName,
    totalStatsPlayer1.season,
  ];

  //Combine the data for the second player if they played on multiple teams
  const totalStatsPlayer2 = data2.reduce(
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

  const chartValuesPlayer2 = [
    totalStatsPlayer2.points,
    totalStatsPlayer2.assists,
    totalStatsPlayer2.totalRb,
    totalStatsPlayer2.steals,
    totalStatsPlayer2.blocks,
    totalStatsPlayer2.fieldGoals,
    totalStatsPlayer2.ft,
    totalStatsPlayer2.playerName,
    totalStatsPlayer2.season,
  ];

  const chart = {
    labels: chartLabels,
    datasets: [
      {
        label: `${data1[0].playerName}`,
        data: chartValuesPlayer1,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: `${data2[0].playerName}`,
        data: chartValuesPlayer2,
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
        text: `${data1[0].playerName} - ${data1[0].season} Season Stats vs ${data2[0].playerName} - ${data2[0].season} Season Stats`,
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
