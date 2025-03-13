const LoginFormComponent = require("./../components/common/loginform.component");

class LoginPage {
  constructor() {
    this.loginForm = new LoginFormComponent();
  }

  async open() {
    await browser.url("/");
  }
}

module.exports = LoginPage;
