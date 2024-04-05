import { Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChar = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Product Chart`,
      },
    },
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = data?.result?.map((data) => data?.priceRange );
  const values =  data?.result?.map((data) => data?.count);
  const datasetData = {
    labels,
    datasets: [
      {
        label: "Product Price",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Paper elevation={1}>
      <Bar options={options} data={datasetData} />;
    </Paper>
  );
};

export default BarChar;
