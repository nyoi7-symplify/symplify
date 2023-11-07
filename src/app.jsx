import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';
import { javascript } from '@codemirror/lang-javascript';
import { darcula } from '@uiw/codemirror-theme-darcula';

// const code = "const a = 10;";

const App = () => {
  const [value, setValue] = React.useState("console.log('hello world!');");
  
  const onChange = React.useCallback((val, viewUpdate) => {
    // console.log('val:', val);
    setValue(val);
  }, []);

  useEffect(() => {
    console.log(value)
  }, [value])

  // const submitCode = () => {
  //   console.log(val);
  // }
  
  return (
    <div className="App">
      <CodeMirror 
      value={value} 
      height="200px"
      theme={darcula}
      onChange={onChange} 
      extensions={[javascript({ jsx: true })]}/>
    </div>
  )
}



export default App;