class LoginFormComponent {
  get userName() {
    return $('//*[@id="user-name"]');
  }

  get password() {
    return $('//*[@id="password"]');
  }

  get loginBtn() {
    return $('//*[@id="login-button"]');
  }

  get errorMessage() {
    return $('//*[@data-test="error"]');
  }

  async setData(username, password) {
    await this.userName.setValue(username);
    await this.password.setValue(password);

    await browser.pause(3000);
  }
}

module.exports = LoginFormComponent;
