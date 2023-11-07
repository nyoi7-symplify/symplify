import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';

const App = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  
  const onChange = React.useCallback((val, viewUpdate) => {
    // console.log('val:', val);
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
    console.log(await res.json())
  }
  
  return (
    <div className="App">
      <CodeMirror 
      value={value} 
      height="200px"
      theme={darcula}
      onChange={onChange} 
      extensions={[javascript({ jsx: true })]}/>

      <button onClick={handleRun}>Run</button>
    </div>
  )
}



export default App;