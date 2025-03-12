describe("Swag Labs login page", () => {
  beforeEach(async () => {
    await browser.url("https://www.saucedemo.com/");
  });

  it("should test Login form without data", async () => {
    const userName = await $('//*[@id="user-name"]');
    const password = await $('//*[@id="password"]');
    const loginBtn = await $('//*[@id="login-button"]');

    await userName.setValue("");
    await password.setValue("");

    await browser.pause(3000);

    await loginBtn.click();

    await expect($('//*[@data-test="error"]')).toBeDisplayed();

    await expect($('//*[@data-test="error"]')).toHaveText(
      /Username is required/
    );
  });

  it("should Test Login form with empty credentials", async () => {
    const userName = await $('//*[@id="user-name"]');
    const password = await $('//*[@id="password"]');
    const loginBtn = await $('//*[@id="login-button"]');

    await userName.setValue("John_Smith");
    await password.setValue("secret_sauce");

    await browser.pause(3000);

    await userName.click();
    await userName.clearValue();
    await password.click();
    await password.clearValue();
    await password.click();

    await browser.pause(3000);

    await loginBtn.click();

    await expect($('//*[@data-test="error"]')).toBeDisplayed();

    await expect($('//*[@data-test="error"]')).toHaveText(
      /Username is required/
    );
  });

  it("should Test Login form with credentials by passing Username", async () => {
    const userName = await $('//*[@id="user-name"]');
    const password = await $('//*[@id="password"]');
    const loginBtn = await $('//*[@id="login-button"]');

    await userName.setValue("Max");
    await password.setValue("secret_sauce");

    await browser.pause(3000);

    await password.clearValue();
    await password.click();

    await browser.pause(3000);

    await loginBtn.click();

    await expect($('//*[@data-test="error"]')).toBeDisplayed();

    await expect($('//*[@data-test="error"]')).toHaveText(
      /Password is required/
    );
  });

  it("should Test Login form with credentials by passing Username & Password", async () => {
    const userName = await $('//*[@id="user-name"]');
    const password = await $('//*[@id="password"]');
    const loginBtn = await $('//*[@id="login-button"]');

    await userName.setValue("problem_user");
    await password.setValue("secret_sauce");

    await loginBtn.click();

    await expect(browser).toHaveTitle("Swag Labs");
  });
});
