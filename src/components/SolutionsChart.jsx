import React, { useState, useEffect } from 'react';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const SolutionsChart = ({ solutions }) => {

  const containerStyle = {
    background: 'white', // Set the background to white
    borderRadius: '8px',
    padding: '16px',
  };

  return (
    <div style={containerStyle}>
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