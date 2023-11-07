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
  const executionTime = (new Date()).toString();
  let result, accepted = true;

  try {
    result = execSync('node server/scripts/test.js')
    console.log("Result:", result.toString())
  } catch(err) {
    accepted = false;
    console.error('Error stdout:', err.stdout.toString());
    console.error('Error stderr:', err.stderr.toString());
  }

  const endTime = performance.now();
  const runTime = endTime - startTime
  // console.log("start time", startTime, "end time", endTime);
  // console.log(`runtime: ${runTime}`);

  const algorithmResults = {
    "runTime": runTime,
    "execTime": executionTime,
    "result": result.toString(),
    "accepted": accepted
  }

  res.locals.res = algorithmResults;
  return next(); 
}

runtimeController.storeRuns = (req, res, next) => {
  const queryText = 'INSERT INTO Runtime (Runtime, Time) VALUES ($1, $2)';
  const values = [res.locals.time, res.locals.date];

  db.query(queryText, values)
    .then(() => next())
    .catch((err) => {
      return next(
        {
          log: `storeRuns ${err}`,
          message: { err: 'Error at storeRuns' }
        }
      );
    });
}

runtimeController.getData = async (req, res, next) => {
  const queryText = 'SELECT * FROM Runtime';
  const result = await db.query(queryText)
  console.log(result)
  return next()
}

runtimeController.returnRun = (req, res, next) => {}

module.exports = runtimeController;