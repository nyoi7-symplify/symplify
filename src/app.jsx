import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';

// import logo from './files/logo.png'

import { Box, Button, AppBar, Typography, Toolbar } from '@mui/material';
import ResultsBox from './components/Results.jsx';
import Solutions from './components/SolutionsTable.jsx';
import SolutionsChart from './components/SolutionsChart.jsx';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import Navbar from './components/Navbar.jsx';

import './app.css'

const App = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const [results, setResults] = useState({});

  const [solutions, setSolutions] = useState([])

  async function getSolutions() {
    const res = await fetch('/api/data')
    const data = await res.json();
    setSolutions(data)
  }  

  // useEffect(() => {
  //   if(solutions.length) {
  //     console.log("Solutions for", solutions[0].label)
  //     console.log(solutions)
  //   }
  // }, [solutions])

  useEffect(() => {
    getSolutions()
  }, [])
 
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  
  async function handleRun() {
    const res = await fetch('/api/algoCode',
    {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'text/plain',
      },
      body: value
    })
    const data = await res.json();
    console.log("Data received", data)

    getSolutions()
    setResults(data);
    // console.log(await res.json())
  }

  return (
    <div className="app-container">
    
      <div className="app-left">
        <Navbar />
        <CodeMirror
          value={value}
          height="200px"
          width="800px"
          theme={darcula}
          onChange={onChange}
          extensions={[javascript({ jsx: true })]}
        />
          
        <Button variant="outlined" onClick={handleRun}>
          Submit
        </Button>
          
        {results !== null ? <ResultsBox data={results} /> : null}

        <Solutions solutions={solutions}/>
        <SolutionsChart solutions={solutions}/>
      </div>
    </div>
  )
}

export default App;