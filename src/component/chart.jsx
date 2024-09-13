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

  //Calculate the stats for the first player if they played on multiple teams
  const totalStats1 = data1.reduce(
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

  // Calculate the stats for the second player if they played on multiple teams
  const totalStats2 = data2
    ? data2.reduce(
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
      )
    : null;

  // Create labels and values for the chart
  const chartLabels = [
    "Points",
    "Assists",
    "Rebounds",
    "Steals",
    "Blocks",
    "Field Goals",
    "Free Throws",
  ];
  // Values for the first player
  const chartValues1 = [
    totalStats1.points,
    totalStats1.assists,
    totalStats1.totalRb,
    totalStats1.steals,
    totalStats1.blocks,
    totalStats1.fieldGoals,
    totalStats1.ft,
  ];

  // Values for the second player
  const chartValues2 = [
    totalStats2.points,
    totalStats2.assists,
    totalStats2.totalRb,
    totalStats2.steals,
    totalStats2.blocks,
    totalStats2.fieldGoals,
    totalStats2.ft,
  ];

  // Make the first dataset negative to extend bars to the left
  const negativeChartValues = chartValues1.map((value) => -value);

  // Calculate the maximum value to adjust the ticks and tooltips
  const allValues = [...chartValues1, ...chartValues2];
  const maxValue = Math.max(...allValues);

  const chart = {
    type: "bar",
    labels: chartLabels,
    datasets: [
      {
        label: `${data1[0].playerName}`,
        data: negativeChartValues,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      data2 && {
        label: `${data2[0].playerName}`,
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
        text: ` ${data1[0].playerName} ${data1[0].season} vs. ${data2[0].playerName} ${data2[0].season}`,
      },
    },
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Bar data={chart} options={chartOptions} />
    </div>
  );
};

export default BarChart;
