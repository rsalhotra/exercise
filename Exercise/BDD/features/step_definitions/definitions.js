const { Given, When, Then } = require('cucumber');
let assert = require('assert');
let expect = require('chai').expect;
const { driver } = require('../support/web_driver');
const { exercisePageObjects } = require('../../page-objects/exercisePage.js');
let answer = 0;
let gotResult;
let cy;

Given(/^webpage url is "([^"]*)"$/, async function (url) {

    await driver.get(url);
});

Given(/^start with 0/, async function (arg1) {
    return answer = 0;
});

Then(/^page url should match with "([^"]*)"$/, async function (expectedURL) {
    let url;
    String(url) = driver.getCurrentUrl();
    expect(url).to.equal(expectedURL);
});

Then(/^the Id "([^"]*)" should have the text value of "([^"]*)"$/, async function (idText, valueText) {
    await driver.findElement(By.id(idText)).getText().then((text) => {
        return text === valueText;
    });
});


When(/^input text values "([^"]*)", "([^"]*)" ,"([^"]*)", "([^"]*)", "([^"]*)"  are added$/, async function (val1, val2, val3, val4, val5) {
    await driver.findElement(By.id(val1)).getAttribute("value").then((value1) => {
        valNum1 = parseFloat(value1.replace(/[^\d\.\-]/g, ""));
        answer = answer + valNum1;
    });
    await driver.findElement(By.id(val2)).getAttribute("value").then((value2) => {
        valNum2 = parseFloat(value2.replace(/[^\d\.\-]/g, ""));
        answer = answer + valNum2;
    });

    await driver.findElement(By.id(val3)).getAttribute("value").then((value3) => {
        valNum3 = parseFloat(value3.replace(/[^\d\.\-]/g, ""));
        answer = answer + valNum3;
    });

    await driver.findElement(By.id(val4)).getAttribute("value").then((value4) => {
        valNum4 = parseFloat(value4.replace(/[^\d\.\-]/g, ""));
        answer = answer + valNum4;
    });

    await driver.findElement(By.id(val5)).getAttribute("value").then((value5) => {
        valNum5 = parseFloat(value5.replace(/[^\d\.\-]/g, ""));
        answer = answer + valNum5;
    });

    
});

Then(/^the final value should match with value of id '([^']*)'$/, async function (totalValue) {
    await driver.findElement(By.id(totalValue)).getAttribute("value").then((result) => {
        result = parseFloat(result.replace(/[^\d\.\-]/g, ""));
        expect(result).to.equal(answer);
    });
});


Then(/^the value of Id "([^"]*)" should be greater than 0/, async function (idText) {
    await driver.findElement(By.id(idText)).getAttribute("value").then((textValue) => {
        textValue = parseFloat(textValue.replace(/[^\d\.\-]/g, ""));
        return expect(textValue).to.be.gt(0);
    });
});

Given(/^the field is "([^"]*)"$/, async function (arg1) {
    await driver.findElement(By.id(arg1)).getAttribute("value").then((result) => {
        gotResult = result;
    });
});

When(/^the currency is \$$/, async function () {
    return cy = '$'
});

Then(/^the result should contain$/, async function () {
    expect(gotResult).to.contains(cy);
});

Then(/^the value of id "([^"]*)" should be displayed$/, async function (elementId) {
    expect(driver.findElement(By.id(elementId)).isDisplayed()).to.be.true;
});



