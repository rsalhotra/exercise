"use strict";
let totalVal;
module.exports = {
    elements: {
      valueId1: element(by.id('lbl_val_1')),
      valueId2: element(by.id('lbl_val_2')),
      valueId3: element(by.id('lbl_val_3')),
      valueId4: element(by.id('lbl_val_4')),
      valueId5: element(by.id('lbl_val_5')),
      inputTextId1: element(by.id('txt_val_1')),
      inputTextId2: element(by.id('txt_val_2')),
      inputTextId3: element(by.id('txt_val_4')),
      inputTextId4: element(by.id('txt_val_5')),
      inputTextId5: element(by.id('txt_val_6')),
      totalBalText: element(by.id('lbl_ttl_val')),
      totalBalValue: element(by.id('txt_ttl_val'))
    },
  
    getValue: function(elementLocator){ 
        elementLocator.getAttribute('value').then(function(valueText){
            return valueText;
        });
    },   

    addInputTextValues: function(){
        let inputBox1Value, inputBox2Value, inputBox3Value, inputBox4Value, inputBox5Value;
        
        this.getValue(this.elements.inputTextId1).then(function(value1){
            inputBox1Value = parseFloat(value1.replace(/\$|,/g, ''));
        });
            
        this.getValue(this.elements.inputTextId2).then(function(value2){
           inputBox2Value = parseFloat(value2.replace(/\$|,/g, ''));
        });
        
        this.getValue(this.elements.inputTextId3).then(function(value3){
            inputBox3Value = parseFloat(value3.replace(/\$|,/g, ''));
        });

        this.getValue(this.elements.inputTextId4).then(function(value4){
            inputBox4Value = parseFloat(value4.replace(/\$|,/g, ''));
        });

        this.getValue(this.elements.inputTextId5).then(function(value5){
            inputBox5Value = parseFloat(value5.replace(/\$|,/g, ''));
        }); 

        return totalVal = inputBox1Value + inputBox2Value + inputBox3Value + inputBox4Value + inputBox5Value;
    },

    getTotalBalVal: function(){
        this.getValue(this.elements.totalBalValue).then(function(value){
            return parseFloat(value.replace(/\$|,/g, ''));
        });
        
    },

    greaterThan0: function(elementName){
        this.getValue(elementName).then(function(value){
            expect (parseFloat(value.replace(/\$|,/g, ''))).toBeGreaterThan(0);
        });
    },

    setInputValue: function(elementLocator,value){
        elementLocator.sendKeys(value.toString(),protractor.Key.ENTER);
    }
    
}