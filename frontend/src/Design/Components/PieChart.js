import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data, colors }) => {
  const options = {
    labels: data.labels,
    colors: colors,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return <Chart options={options} series={data.series} type="pie" />;
};

export default PieChart;
