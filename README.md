# TestCafe Example Project

This is a base project using the [`testcafe`](https://github.com/DevExpress/testcafe) framework for JavaScript to handle the automated functional tests and reporting.

## Run Locally

1. Install TestCafe globally

  ```
  $ npm install -g testcafe
  ```

  If you want to update the version just use:

  ```
  $ npm update -g testcafe
  ```

2. Run the following command to run the test:

  ```
  $ testcafe <browser> --disable-page-reloads
  ```

3. Run test on enviroment defined:
  ```
  $ npm run test:<enviroment>
  ```

## Convert XPath to CSS via CMD

This project includes a small script to turn XPath to CSS, this doesn't support `-` or `_`. Use with the following command:

  ```cmd
  $ node xpathToCSS.js --path <xpath>
  ```

  For example:

  ```cmd
  $ node xpathToCSS.js --path /html/body/ui_view/div[2]/top-panel/div/student-top-panel/div/div/a[3]/span
  > html > body > ui > div:nth-of-type(2) > top > div > student > div > div > a:nth-of-type(3) > span
  ```

## TestCafe Options

We use several options to run and validate tests that come with TestCafe:

1. Screenshots on Failure (-S): takes screenshots when a test fails, *needs the screenshot folder to be specified*.
2. Screenshot Folder (-s \<path\>): this is used to specify wich folder the screenshot need to be saved.
3. Skip JS Errors (-e): this enables tests no to fail if there is a JS error on the console.
4. Reporter (-r \<reporter\>): used to specify wich type of reporter to use and the output.
5. Disable Page Reloads (--disable-page-reloads): this prevents testcafe from refreshing the whole app for every test and keep session alive. 

## Project commands

The project has many `npm` commands ready to be used, just put `npm run <command>`:

1. `test`: does a normal run of testcafe.
  - Flags:
    1. -e
    2. --disable-page-reloads

2. `test:screenshot`: runs the tests but generates screenshots when a test fails.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots

3. `test:bs`: runs the tests on browserstack, by default runs on an `Samsung Galaxy S8`.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots
    5. -r spec,xunit:report.xml

4. `test:ci`: runs tests in headless mode for chrome and firefox.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots
    5. -r spec,xunit:report.xml

5. `test:multiple`: runs tests on multiple browsers at the same time, by default on `chrome, ie, edge and firefox`.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots

## Node Options

```cmd
Commands:
    help     Display help
    version  Display version

  Options:
    -b, --browser <list>  List of browsers to run with (defaults to ["chrome"])
    -e, --env [value]     The environment on which the tests will ryb (defaults to "dev")
    -h, --help            Output usage information
    -t, --test <list>     Test files to run (defaults to [])
    -T, --testAll         Run all of the test files (disabled by default)
    -v, --version         Output the version number
```

### Examples

1. Run with Chrome and Firefox two test files in QA environment.

```cmd
  $ node index.js -e qa -b chrome -b firefox -t 1-login -t 2-dashboard
```

1. Run with Chrome Headless all tests in PROD environment.

```cmd
  $ node index.js -e prod -b chrome:headless -T
```