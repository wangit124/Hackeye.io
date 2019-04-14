module.exports = {
  'Test Title Page': function (browser) {
    browser
      .url('localhost:8000')
      .waitForElementVisible('body')
      .waitForElementVisible('#logo', 2000)
      .waitForElementVisible('#HackEye', 2000)
      .waitForElementVisible('p', 2000)
      .pause(1000)
      // check if page contains help msg
      .assert.containsText('#help-msg', 'Click anywhere')
      .click('body')
      .pause(4000)
      .waitForElementVisible('#projects', 1000)
      .assert.containsText('#projects', '20853')
      .end();
  }
};