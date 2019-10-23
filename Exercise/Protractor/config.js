exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",

  onPrepare: function() {
    browser.driver.manage().window().maximize();
  },

  framework: "jasmine2",

  capabilities: {
    browserName: "chrome"
  },

  specs: ["example-spec.js"],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 2 * 60 * 1000, // 2 Minutes
    showColors: true,
    isVerbose: true
  }
};
