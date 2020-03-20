const {By, until} = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var {driver, base_url} = require('../index.js');
var expect = require('chai').expect;

TIMEOUT = 20000;


exports.authenticate_user = function(){
    driver.get( base_url );
    
    driver.executeScript('window.sessionStorage.clear();');
    driver.executeScript('window.localStorage.clear();');

    driver.sleep(4000);

    driver.wait(function () {
        return until.elementIsVisible(By.css('ContentPlaceholderMainContent_UpdatePanelMain > h1'));
    }, TIMEOUT);



  
};