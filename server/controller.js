const db = require('./model.js');
const { exec } = require('child_process');
const fs = require('fs');

const runtimeController = {};


runtimeController.scriptBuilder = (req, res, next) => {

  fs.writeFileSync('./server/scripts/test.js', req.body);

  return next();

}

runtimeController.scriptRunner = (req, res, next) => {

  const startTime = performance.now();

  exec('node server/scripts/test.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`Child Process Output: ${stdout}`);
  })

  const endTime = performance.now();

  console.log(`runtime: ${endTime - startTime}`);


  return next();
  
}

runtimeController.storeRuns = (req, res, next) => {



  
}


runtimeController.returnRun = (req, res, next) => {



  
}



module.exports = runtimeController;