import React, { useState, useEffect } from 'react';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const SolutionsChart = () => {
  const [solutions, setSolutions] = useState([])

  useEffect(() => {
    if(solutions.length) {
      console.log("Solutions for", solutions[0].label)
      console.log(solutions)
    }
  }, [solutions])

  useEffect(() => {
    async function getSolutions() {
      const res = await fetch('/api/data')
      const data = await res.json();
      setSolutions(data)
    }
    getSolutions()

  }, [])

  return (<>
      <Bar
        data={{
          labels: solutions.map((solution) => solution.runid),
          datasets: [
            {
              label: "Runtime (in ms)",
              data: solutions.map((solution) => solution.runtime)
            }
          ]
        }}
      />
  </>);
}

export default SolutionsChart;