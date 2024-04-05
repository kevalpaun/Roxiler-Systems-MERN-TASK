import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const labels = data?.result?.map((data) => data?.category);
  const values = data?.result?.map((data) => data?.itemCount);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Category Count",
        data: values,
        borderWidth: 1,
        backgroundColor: data?.result?.map((_, index) => {
          return `rgba(${index}55, 99, 3, 0.2)`;
        }),
        borderColor: data?.result?.map((_, index) => {
          return `rgba(${index}55, 99, 32, 0.2)`;
        }),
      },
    ],
  };

  return (
    <Paper elevation={1}>
      <Pie data={chartData} />;
    </Paper>
  );
};

export default PieChart;
