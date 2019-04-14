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
      .waitForElementVisible('#logo')
      .waitForElementVisible('#HackEye')
      .pause(1000)
      .assert.containsText('h1', 'Loading...');

    browser.expect.element('body').to.be.present.before(4000);
    browser.end();
  }
};