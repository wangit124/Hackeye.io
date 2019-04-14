module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('localhost:8000')
      .waitForElementVisible('body')
      .waitForElementVisible('p')
      .pause(1000)
      .assert.containsText('h2', 'Night Watch')
      .end();
  }
};