import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';

import { Button } from '@mui/material';
import ResultsBox from './components/Results.jsx';
import Solutions from './components/SolutionsTable.jsx';
import SolutionsChart from './components/SolutionsChart.jsx';

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

const App = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const [results, setResults] = useState({});
 
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
    
    setResults(data);
    // console.log(await res.json())
  }

  return (
    <div className="App">
      <CodeMirror 
      value={value} 
      height="200px"
      width="800px"
      theme={darcula}
      onChange={onChange} 
      extensions={[javascript({ jsx: true })]}/>

      <br />
      <Button variant="outlined" onClick={handleRun}>Submit</Button>

      {results !== null ? <ResultsBox data={results} /> : null}

      <Solutions />

      <SolutionsChart />
     
    </div>
  )
}



export default App;