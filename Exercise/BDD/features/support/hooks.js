const { After, Before, AfterAll, setDefaultTimeout } = require('cucumber');
const { driver } = require('./web_driver');

setDefaultTimeout(60 * 1000);

Before(function () {

})

After(async function () {
    
});

AfterAll(function () {
    return driver.quit();
})

