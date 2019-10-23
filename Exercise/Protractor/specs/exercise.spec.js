"use strict";

let exerciseScript = require("../scripts/exerciseScript");
let pageObject = require("../pageObjects/exercisePageObject");

describe("test https://www.exercise1.com/values page : ", () => {
    beforeAll(done => {
        browser.ignoreSynchronization = true;
        exerciseScript.navigateToUrl('https://www.exercise1.com/values');      
        done();
    });
  
    afterAll(() => {
      browser.ignoreSynchronization = false;
    });
  
    it("first input box should be displayed", () => {
      expect(pageObject.elements.inputTextId1.isDisplayed()).toBe(true);
    });

    it("2nd input box should be displayed", () => {
        expect(pageObject.elements.inputTextId2.isDisplayed()).toBe(true);
    });

    it("3rd input box should be displayed", () => {
        expect(pageObject.elements.inputTextId3.isDisplayed()).toBe(true);
    });

    it("4th input box should be displayed", () => {
        expect(pageObject.elements.inputTextId4.isDisplayed()).toBe(true);
    });

    it("5th input box should be displayed", () => {
        expect(pageObject.elements.inputTextId5.isDisplayed()).toBe(true);
    });

    it("total balance value box should be displayed", () => {
        expect(pageObject.elements.totalBalValue.isDisplayed()).toBe(true);
    });

    it('verify tatal balance $100000 matchs with total input values',()=>{
        exerciseScript.sendInputValue(pageObject.elements.inputTextId1,122365.24);
        exerciseScript.sendInputValue(pageObject.elements.inputTextId2,599.00);
        exerciseScript.sendInputValue(pageObject.elements.inputTextId3,850139.99);
        exerciseScript.sendInputValue(pageObject.elements.inputTextId1,23329.50);
        exerciseScript.sendInputValue(pageObject.elements.inputTextId1,566.27);
        exerciseScript.totalInputMatchTotalBal();
        //it doesn't match to $100000 , it is $997000, the test should fail
    });

    it("first input box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.inputTextId1);
    });

    it("2nd input box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.inputTextId2);
    });

    it("3rd input box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.inputTextId3);
    });

    it("4th input box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.inputTextId4);
    });

    it("5th input box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.inputTextId5);
    });

    it("total balance value box should be greater than 0", () => {
        exerciseScript.valueGreaterThan0(pageObject.elements.totalBalValue);
    });
    
    it("should contain '$' 1st input value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.inputTextId1);
    });

    it("should contain '$' 2nd input value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.inputTextId2);
    });

    it("should contain '$' 3rd input value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.inputTextId3);
    });

    it("should contain '$' 4th input value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.inputTextId4);
    });

    it("should contain '$' 5th input value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.inputTextId5);
    });

    it("should contain '$' total balance value",() => {
        exerciseScript.verifyCurrencyFormat(pageObject.elements.totalBalValue);
    });
});