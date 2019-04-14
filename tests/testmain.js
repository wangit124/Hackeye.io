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
  },

  'Test Load Page': function (browser) {
    browser
      // simulate click and check if loading page includes all elements
      .click('body')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Loading...')
      .pause(2000)
  },

  'Test project page': function (browser) {
    browser
      .waitForElementVisible('h2', 1000)
      .assert.containsText('h1', 'hi')
      .end();
  }
};