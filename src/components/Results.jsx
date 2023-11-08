import React, { useEffect } from 'react';

const ResultsBox = ({ data }) => {
  const { runTime, execTime, result, accepted } = data;

  console.log(accepted);

  return (
    <div className="results-box">
    <p className="result">{result}</p>
    <p className="runtime">Runtime: {runTime ? <>{runTime.toFixed(4)} ms</> : <></>}</p>
    <p className="execution-time">Time of Execution: {execTime ? <>{new Date(execTime).toLocaleString()}</> : <></>}</p>
    <p className={`accepted ${accepted ? 'accepted-flare' : ''}`}>{accepted ? <>Accepted!</> : <></>}</p>
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