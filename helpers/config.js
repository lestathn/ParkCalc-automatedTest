require('dotenv').config();

const args = require('args');

const defaultTests = [
  'tests/test1-valetParking.js',
 
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
    URL: process.env['URL_ENVIROMENT_' + flags.env.toUpperCase()],
    FILES_TO_TEST: filesToTest,
    BROWSERS: flags.browser
};

