const createTestCafe = require('testcafe');
const fs = require('fs');
const stream = fs.createWriteStream('./report.xml');
const config = require('./helpers/config')
let runner           = null;
let testcafe         = null;


process.on('unhandledRejection', e => console.log(e));
createTestCafe('localhost', 1337, 1338)
.then(tc => {
    try{
        testcafe = tc;
        runner = testcafe.createRunner();
        runner
        .src(config.FILES_TO_TEST)
        .browsers(config.BROWSERS)
        .reporter('spec')
        .reporter('nunit', stream)
        .screenshots('screenshots', true)
        .run()
        .then(failedCount => {
            console.log('Tests failed: ' + failedCount);
            stream.end();
            testcafe.close();
        })
        .catch(error => {
            console.log(error);
            stream.end();
            testcafe.close();
            process.exit();
        });
    }
    catch(e){
        console.log(e);
        process.exit();
    }
    
});