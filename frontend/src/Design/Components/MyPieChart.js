import React from "react";
import PieChart from "./PieChart";

const MyPieChart = () => {
  // Example data for the pie chart
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    series: [30, 40, 30],
  };


  // Custom colors for each segment
  const customColors = ["#ff6903", "#ffa001", "#ffa00180"];

  return (
    <div>
      <PieChart data={data} colors={customColors} />

    </div>
  );
};

export default MyPieChart;
