const LoginPage = require("./../po/pages/login.page");

const loginPage = new LoginPage();

const testData = [
  {
    testCase: "Test Login form without data",
    username: "",
    password: "",
    fieldsToClear: [], // if the fields don't need to be cleared
    expectedError: /Username is required/,
    expectedTitle: null,
  },
  {
    testCase: "UC-1: Test Login form with empty credentials",
    username: "John_Smith",
    password: "secret_sauce",
    fieldsToClear: ["userName", "password"], // if the fields need to be cleared
    expectedError: /Username is required/,
    expectedTitle: null,
  },
  {
    testCase: "UC-2: Test Login form with credentials by passing Username",
    username: "Max",
    password: "secret_sauce",
    fieldsToClear: ["password"], // if the fields need to be cleared
    expectedError: /Password is required/,
    expectedTitle: null,
  },
  {
    testCase:
      "UC-3: Test Login form with credentials by passing Username & Password",
    username: "problem_user",
    password: "secret_sauce",
    fieldsToClear: [], // if the fields don't need to be cleared
    expectedError: null,
    expectedTitle: "Swag Labs",
  },
];

describe("Swag Labs login page", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  testData.forEach((test) => {
    it(`${test.testCase}`, async () => {
      console.log(`Starting ${test.testCase}`);

      await loginPage.loginForm.setData(test.username, test.password);

      if (test.fieldsToClear && test.fieldsToClear.length) {
        for (const field of test.fieldsToClear) {
          await loginPage.loginForm[field].click();
          await loginPage.loginForm[field].clearValue();
        }

        await loginPage.loginForm.loginBtn.click();

        if (test.expectedError) {
          await expect(loginPage.loginForm.errorMessage).toBeDisplayed();
          await expect(loginPage.loginForm.errorMessage).toHaveText(
            test.expectedError
          );
        } else if (test.expectedTitle) {
          await expect(browser).toHaveTitle(test.expectedTitle);
        }

        console.log(`Finished ${test.testCase}`);
      }
    });
  });
});
