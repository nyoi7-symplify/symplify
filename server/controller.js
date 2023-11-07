const db = require('./model.js');
const { exec, execSync } = require('child_process');
const fs = require('fs');

const runtimeController = {};

runtimeController.scriptBuilder = (req, res, next) => {
  // console.log(req.body)
  fs.writeFileSync('./server/scripts/test.js', req.body);

  return next();
}

runtimeController.scriptRunner = (req, res, next) => {
  const startTime = performance.now();

  execSync('node server/scripts/test.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Child Process Output: ${stdout}`);
  })

  const endTime = performance.now();
  const runTime = endTime - startTime

  console.log("start time", startTime, "end time", endTime);

  console.log(`runtime: ${runTime}`);
  res.locals.time = runTime;

  return next(); 
}

runtimeController.storeRuns = (req, res, next) => {



  
}


runtimeController.returnRun = (req, res, next) => {
  
}



module.exports = runtimeController;