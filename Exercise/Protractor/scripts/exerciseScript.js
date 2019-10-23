"use strict";


let pageObject = require("../pageObjects/exercisePageObject");


/**
 * 
 */
class ExerciseScript {
  
  /**
   * Navigate to url 
   * @param {String} url name of the url where you would like to navigate to
   */
  static navigateToUrl(url) {
    return browser.get(url);
  }

  /**
   * Total Balance Value should match with total input values added 
   */
  static totalInputMatchTotalBal(){
    expect((pageObject.addInputTextValues()).toEqual(pageObject.getTotalBalVal()));
  }

  /**
   * element's value should be greater than 0
   * @param {Element locator} elementName 
   */
  static valueGreaterThan0(elementName){
    return pageObject.greaterThan0(elementName);
  }

  /**
   * send numaric value to an element locator 
   * @param {Element Locator} elementName element of a field
   * @param {floatNumber} value floating number
   */
  static sendInputValue(elementName,value){
    return pageObject.setInputValue(elementName,value);
  }

  /**
   * verify element value has $ in the results
   * @param {Element Locator} elementName element of a field
   */
  static verifyCurrencyFormat(elementName){
    pageObject.getValue(elementName).then(function(valueText){
      expect(valueText).toContain('$');
    });
  }
}

module.exports = ExerciseScript;