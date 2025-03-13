class LoginFormComponent {
  /**
   * @returns {WebdriverIO.Element} The element of the username input field
   */
  get userName() {
    return $('//*[@id="user-name"]');
  }

  /**
   * @returns {WebdriverIO.Element} The element of the password input field
   */
  get password() {
    return $('//*[@id="password"]');
  }

  /**
   * @returns {WebdriverIO.Element} The element of the login button
   */
  get loginBtn() {
    return $('//*[@id="login-button"]');
  }

  /**
   * @returns {WebdriverIO.Element} The element with the message about an error
   */
  get errorMessage() {
    return $('//*[@data-test="error"]');
  }

  /**
   *
   * @param {string} username The username for input
   * @param {string} password The password for input
   */
  async setData(username, password) {
    await this.userName.setValue(username);
    await this.password.setValue(password);

    await browser.pause(3000);
  }
}

module.exports = LoginFormComponent;
