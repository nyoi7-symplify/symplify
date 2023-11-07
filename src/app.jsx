import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';
import ResultsBox from './results.jsx';


const App = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const [results, setResults] = useState(null); 
 
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
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
    setResults(data);
    // console.log(await res.json())
  
  }


  console.log('this is results', results);
  return (
    <div className="App">
      <CodeMirror 
      value={value} 
      height="200px"
      theme={darcula}
      onChange={onChange} 
      extensions={[javascript({ jsx: true })]}/>

      <button onClick={handleRun}>Run</button>

      {results !== null ? <ResultsBox data={results} /> : null}
     
    </div>
  )
}



export default App;