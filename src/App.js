import List from "./components/ListProducts";
import "./App.css";
import FilterBar from "./components/FilterPanel";
import BarChart from "./components/BarChart";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PieChart from "./components/PieChart";
import Statistics from "./components/Statistics";
import axios from "axios";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getAllStatistics/${selectedMonth}`)
      .then(({ data }) => {
        console.log("data", data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [selectedMonth]);
  return (
    <Box
      className="App"
      style={{
        margin: "10px",
      }}
    >
      <FilterBar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        search={search}
        setSearch={setSearch}
      />
      <List search={search} selectedMonth={selectedMonth} />
      <Statistics data={data?.statistics} />
      <BarChart data={data?.barChartData} />
      <PieChart selectedMonth={selectedMonth} data={data?.pieChartData} />
    </Box>
  );
}

export default App;
