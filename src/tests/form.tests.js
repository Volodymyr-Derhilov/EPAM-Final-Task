const LoginPage = require("./../po/pages/login.page");

const loginPage = new LoginPage();

describe("Swag Labs login page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it("should Test Login form without data", async () => {
    await loginPage.loginForm.setData("", "");

    await loginPage.loginForm.loginBtn.click();

    await expect(loginPage.loginForm.errorMessage).toBeDisplayed();

    await expect(loginPage.loginForm.errorMessage).toHaveText(
      /Username is required/
    );
  });

  it("should Test Login form with empty credentials", async () => {
    await loginPage.loginForm.setData("John_Smith", "secret_sauce");

    await loginPage.loginForm.userName.click();
    await loginPage.loginForm.userName.clearValue();
    await loginPage.loginForm.password.click();
    await loginPage.loginForm.password.clearValue();

    await loginPage.loginForm.loginBtn.click();

    await expect(loginPage.loginForm.errorMessage).toBeDisplayed();

    await expect(loginPage.loginForm.errorMessage).toHaveText(
      /Username is required/
    );
  });

  it("should Test Login form with credentials by passing Username", async () => {
    await loginPage.loginForm.setData("Max", "secret_sauce");

    await loginPage.loginForm.password.click();
    await loginPage.loginForm.password.clearValue();

    await browser.pause(3000);

    await loginPage.loginForm.loginBtn.click();

    await expect(loginPage.loginForm.errorMessage).toBeDisplayed();

    await expect(loginPage.loginForm.errorMessage).toHaveText(
      /Password is required/
    );
  });

  it("should Test Login form with credentials by passing Username & Password", async () => {
    await loginPage.loginForm.setData("problem_user", "secret_sauce");
    await loginPage.loginForm.loginBtn.click();
    await expect(browser).toHaveTitle("Swag Labs");
  });
});
