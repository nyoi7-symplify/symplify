import React, { useEffect } from 'react';

// import '../app.css'

const ResultsBox = ({ data }) => {
  const { runTime, execTime, result, accepted } = data;

  // const boxStyle = {
  //   backgroundColor: '#f5f5f5',
  //   border: '1px solid #ccc',
  //   borderRadius: '5px',
  //   width: '500px',
  //   padding: '10px',
  //   margin: '10px',
  //   fontSize: '16px',
  //   color: '#333',
  // };

  // const resultStyle = {
  //   fontWeight: 'bold',
  //   color: '#0077b6',
  // };

  // const runtimeStyle = {
  //   fontStyle: 'italic',
  //   color: '#555',
  // };

  console.log(accepted);

  return (
    <div className="box">
      <p className="resultStyle">Result: {result}</p>
      <p className="runtimeStyle">Runtime: {runTime ? <>{runTime.toFixed(4)} ms</> : <></>}</p>
      <p className="runtimeStyle">Time of Execution: {execTime ? <>{new Date(execTime).toLocaleString()}</> : <></>}</p>
      <p>{accepted ? <>Accepted!</> : <></>}</p>
    </div>
  );
}

export default ResultsBox;

//Box with three values from code:
    //Accepted/Failed results (Runtime error?)
        //code will run: throw an error if syntax error, etc.
        //some sort of feedback to the user - your code ran without an error
        //if it runs without any kind of error - it is accepted
        //Choices: successful (code runs with test cases and meets expected answer)
            //wrong answer: code runs with test cases but is not expected output
            //runtime error, etc.
    //Runtime info
    //test cases (this was provided by client)