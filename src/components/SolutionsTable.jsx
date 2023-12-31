import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const Solutions = ({ solutions }) => {

  const tableContainerStyle = {
    background: 'linear-gradient(to bottom, #E6E6E6, #0077b6)', // Adjust the gradient colors
    borderRadius: '8px', // Adjust the border radius
    padding: '16px', // Adjust the padding
  };

  return (<div>
  {/* //   <div>  {solutions.length !== 0 ? <>{solutions[0].label} Solutions</>: <></>}</div> */}
  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
    {solutions.length !== 0 ? <>{solutions[0].label} Solutions</> : <></>}
  </div>

    <TableContainer  style={tableContainerStyle}>
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