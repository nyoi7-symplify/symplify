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
  // algorithm execution fields to be passed back to user AND be stored in DB
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

  const algorithmResults = {
    "runTime": runTime,
    "execTime": executionTime,
    "result": result.toString(),
    "accepted": accepted
  }

  res.locals.res = algorithmResults;
  return next();
}

runtimeController.storeRuns = async (req, res, next) => {
  // uncomment out query code when you want to insert more execution entries into the DB
  const { runTime, execTime } = res.locals.res;
  // console.log("INSIDE OF storeRuns", runTime, execTime)

  const queryText = 'INSERT INTO Runtime (Runtime, Time) VALUES ($1, $2)';
  const values = [runTime, execTime];

  try {
    const result = await db.query(queryText, values)
    console.log("RES INSIDE OF storeRuns", result)
  } catch (err) {
    return next(
      {
        log: `storeRuns ${err}`,
        message: { err: 'Error at storeRuns' }
      }
    );
  }

  return next();
}

runtimeController.getData = async (req, res, next) => {
  const queryText = 'SELECT * FROM runtime ORDER BY runid DESC LIMIT 5';
  const result = await db.query(queryText)
  res.locals.data = result.rows;
  return next()
}

runtimeController.returnRun = (req, res, next) => {}

module.exports = runtimeController;