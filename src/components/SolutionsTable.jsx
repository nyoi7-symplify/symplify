import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const Solutions = () => {
  const [solutions, setSolutions] = useState([])

  useEffect(() => {
    if(solutions.length) {
      // console.log("Solutions for", solutions[0].label)
      // console.log(solutions)
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

  return (<div>
    {solutions.length !== 0 ? <>{solutions[0].label} Solutions</>: <></>}

    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell># Submission</TableCell>
            <TableCell>Runtime (in ms)</TableCell>
            <TableCell>Time of Execution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solutions.map((solution) => {
            return (<TableRow>
              <TableCell>{solution.runid}</TableCell>
              <TableCell>{solution.runtime.toFixed(4)}</TableCell>
              <TableCell>{new Date(solution.time).toLocaleString()}</TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>);
}

export default Solutions;