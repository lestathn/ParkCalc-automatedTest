require('dotenv').config();

const args = require('args');

const defaultTests = [
  'tests/test.1-valetParking.js',
  'tests/test.2-shortTermParking.js',
  'tests/test.3-economyParking.js',
  'tests/test.4-longGarage.js',  
  'tests/test.5-longSurface.js', 
  
];

args
  .option('env', 'The environment on which the tests will ryb', 'dev')
  .option('browser', 'List of browsers to run with', ['chrome'])
  .option('test', 'Test files to run', [])
  .option('testAll', 'Run all of the test files', false)
  
const flags = args.parse(process.argv)

flags.test = flags.test.map(test => {
  return 'tests/test.' + test + '.js'
});

let filesToTest;
if(flags.testAll){
  filesToTest = defaultTests;
}
else {
  filesToTest = flags.test;
}

module.exports = {
    URL: process.env.URL,
    FILES_TO_TEST: filesToTest,
    BROWSERS: flags.browser
};

