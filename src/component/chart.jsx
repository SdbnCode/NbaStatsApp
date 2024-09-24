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
  if (!data1 || data1.length === 0) {
    return null;
  }

  //Extract playerTotals array from data1
  const playerTotals1 = Array.isArray(data1?.playerTotals)
    ? data1.playerTotals
    : [];

  if (playerTotals1.length === 0) {
    return null;
  }

  console.log(playerTotals1);

  //Calculate total stats for player 1
  const totalStats1 = playerTotals1.reduce(
    (acc, item) => {
      acc.points += item.points;
      acc.assists += item.assists;
      acc.totalRb += item.totalRb;
      acc.fieldGoals += item.fieldGoals;
      acc.threeFg += item.threeFg;
      acc.ft += item.ft;
      acc.turnovers += item.turnovers;
      acc.steals += item.steals;
      acc.blocks += item.blocks;
      acc.games += item.games;
      return acc;
    },
    {
      points: 0,
      assists: 0,
      totalRb: 0,
      fieldGoals: 0,
      threeFg: 0,
      ft: 0,
      turnovers: 0,
      steals: 0,
      blocks: 0,
      games: 0,
    }
  );

  // Safely extract playerTotals array from data2 if it exists
  const playerTotals2 = Array.isArray(data2?.playerTotals)
    ? data2.playerTotals
    : [];

  const totalStats2 = playerTotals2.length
    ? playerTotals2.reduce(
        (acc, item) => {
          acc.points += item.points;
          acc.assists += item.assists;
          acc.totalRb += item.totalRb;
          acc.fieldGoals += item.fieldGoals;
          acc.threeFg += item.threeFg;
          acc.ft += item.ft;
          acc.turnovers += item.turnovers;
          acc.steals += item.steals;
          acc.blocks += item.blocks;
          acc.games += item.games;
          return acc;
        },
        {
          points: 0,
          assists: 0,
          totalRb: 0,
          fieldGoals: 0,
          threeFg: 0,
          ft: 0,
          turnovers: 0,
          steals: 0,
          blocks: 0,
          games: 0,
        }
      )
    : null;

  // Create labels and values for the chart
  const chartLabels = [
    "Points",
    "Assists",
    "Rebounds",
    "Field Goals",
    "Three-Pointers",
    "Free Throws",
    "Turnovers",
    "Steals",
    "Blocks",
    "Games",
  ];

  // Values for player 1
  const chartValues1 = [
    totalStats1.points,
    totalStats1.assists,
    totalStats1.totalRb,
    totalStats1.fieldGoals,
    totalStats1.threeFg,
    totalStats1.ft,
    totalStats1.turnovers,
    totalStats1.steals,
    totalStats1.blocks,
    totalStats1.games,
  ];

  // Values for player 2
  const chartValues2 = totalStats2
    ? [
        totalStats2.points,
        totalStats2.assists,
        totalStats2.totalRb,
        totalStats2.fieldGoals,
        totalStats2.threeFg,
        totalStats2.ft,
        totalStats2.turnovers,
        totalStats2.steals,
        totalStats2.blocks,
        totalStats2.games,
      ]
    : [];

  const negativeChartValues = chartValues1.map((value) => -value);
  const allValues = [...chartValues1, ...chartValues2];
  const maxValue = Math.max(...allValues);

  const chart = {
    type: "bar",
    labels: chartLabels,
    datasets: [
      {
        label: `${data1.playerTotals[0]?.playerName}`,
        data: negativeChartValues,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      data2 && {
        label: `${data2?.playerTotals[0]?.playerName}`,
        data: chartValues2,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        // Allows for even scaling of the bars
        suggestedMin: -maxValue,
        suggestedMax: maxValue,
        // Have the ticks return positive values
        ticks: {
          callback: function (value, index, values) {
            return Math.abs(value);
          },
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
    },
    plugins: {
      // Adjust tooltips to display positive values like chart
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += Math.abs(context.parsed.x);
            return label;
          },
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${data1?.playerTotals?.[0]?.playerName} vs. ${data2?.playerTotals?.[0]?.playerName}`,
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Bar data={chart} options={chartOptions} />
    </div>
  );
};

export default BarChart;
