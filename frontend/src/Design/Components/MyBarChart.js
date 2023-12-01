// MyBarChart.js
import React from 'react';
import BarChartComponent from './BarChartComponent';

export default function MyBarChart() {
  const chartData = [
    { name: 'Category 1', value: 25, color: 'red' },
    { name: 'Category 2', value: 40, color: 'green' },
    { name: 'Category 3', value: 30, color: 'yellow' },
    { name: 'Category 4', value: 55, color: '#82ca9d' }, // Default color for the fourth bar
  ];

  return (
    <div>
      <BarChartComponent data={chartData} />
    </div>
  );
}
