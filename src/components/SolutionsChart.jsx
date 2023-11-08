import React, { useState, useEffect } from 'react';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const SolutionsChart = ({ solutions }) => {

  const chartContainerStyle = {
    background: 'white',
    borderRadius: '8px',
    maxWidth: '300px', /* Set a maximum width for the chart */
    margin: '0 auto', /* Center the chart horizontally */
  };

  return (
    <div style={chartContainerStyle}>
    <Bar
      data={{
        labels: solutions.map((solution) => solution.runid),
        datasets: [
          {
            label: "Runtime (in ms)",
            data: solutions.map((solution) => solution.runtime),
          },
        ],
      }}
    />
  </div>
  );
}

export default SolutionsChart;