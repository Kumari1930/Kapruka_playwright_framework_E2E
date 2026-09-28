# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\login_kapruka.spec.ts >> Kapruka Login Test >> Valid user should login successfully
- Location: tests\e2e\login_kapruka.spec.ts:16:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /accountLogin/
Received string: "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=loginError2&email=shilpeeuser@gmail.com&origin=regular"

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    6 × locator resolved to <html dir="ltr" lang="en">…</html>
      - unexpected value "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=loginError2&email=shilpeeuser@gmail.com&origin=regular"
  - Test timeout of 30000ms exceeded.

```

```yaml
- link "logo area":
  - /url: https://www.kapruka.com
  - img "logo area"
- textbox "SEARCH PRODUCTS.."
- button "online search":
  - img "Search"
- combobox "Select Currency":
  - option "INR" [selected]
  - option "USD"
- combobox "Select language":
  - option "Lang"
  - option "සිං"
  - option "Eng" [selected]
- link:
  - /url: /shops/checkout/deliveryCartViewPage.jsp
  - img
- link "Check Order Status":
  - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
  - img "status"
- link "Login to Your Account":
  - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
  - img
- list:
  - listitem: All Categories
  - listitem:
    - link "Event Icon Children's Day Offers":
      - /url: https://www.kapruka.com/online/childrensday
      - img "Event Icon"
      - text: Children's Day Offers
  - listitem:
    - link "Event Icon Teachers' Day Offers":
      - /url: https://www.kapruka.com/online/teachersday
      - img "Event Icon"
      - text: Teachers' Day Offers
  - listitem:
    - link "Same Day Rush delivery":
      - /url: https://www.kapruka.com/online/samedaydelivery
      - img "Same Day"
      - text: Rush delivery
  - listitem:
    - link "On Sale":
      - /url: https://www.kapruka.com/online/promotions
  - listitem:
    - link "Events":
      - /url: https://www.kapruka.com/shops/events_home.jsp
  - listitem:
    - link "Brands":
      - /url: https://www.kapruka.com/online_brands.jsp
  - listitem:
    - link "For You":
      - /url: https://www.kapruka.com/online/combogifts
- list:
  - listitem:
    - link "Home":
      - /url: https://www.kapruka.com
  - listitem:
    - link "/ Customer Account Login":
      - /url: "#"
- heading "Your Shopping Account" [level=1]
- text: Your password is wrong. Please try again.
- img
- heading "New Customers" [level=3]
- paragraph: If you create an account with us, you will get additional benefits such as order history, bonus cash and more.
- button "Create Account"
- heading "Kapruka Members" [level=3]
- paragraph: If you have a Kapruka account, then enter your e-mail and password here.
- textbox "Email address":
  - /placeholder: Enter email
  - text: shilpeeuser@gmail.com
- textbox "Password"
- button "Login"
- paragraph
- link "Forgot your password":
  - /url: https://www.kapruka.com/shops/customerAccounts/forgot_password.jsp
- text: "|"
- link "Account benefits":
  - /url: javascript:void(0);
- heading "Or Sign In With" [level=3]
- img
- text: Signed in with Google
- contentinfo:
  - paragraph:
    - text: Kapruka.com -
    - link "Sri Lanka's":
      - /url: https://www.kapruka.com/contactUs/about.html
    - text: Largest Online Shop
  - navigation:
    - link "About Kapruka":
      - /url: https://www.kapruka.com/contactUs/about.html
    - text: "|"
    - link "Contact Us":
      - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
    - text: "|"
    - link "Order Tracking":
      - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
```

# Test source

```ts
  1   | import {Page ,Locator ,expect} from '@playwright/test';
  2   | import {basePage} from './basepage';
  3   | import { config } from '../config/environment';
  4   | 
  5   | 
  6   | 
  7   | export class loginPage extends basePage
  8   | {
  9   |     static goto() {
  10  |         throw new Error('Method not implemented.');
  11  |     }
  12  |     static isLoaded() {
  13  |         throw new Error('Method not implemented.');
  14  |     }
  15  |     static login(TEST_EMAIL: any, TEST_PASSWORD: any) {
  16  |         throw new Error('Method not implemented.');
  17  |     }
  18  |     static verifyLoginSuccess() {
  19  |         throw new Error('Method not implemented.');
  20  |     }
  21  |    
  22  | readonly email :Locator;    
  23  | readonly password :Locator;
  24  | readonly loginButton :Locator
  25  | 
  26  | constructor(page: Page)
  27  | {
  28  |     super(page);
  29  |     this.email = page.getByPlaceholder('Enter email');
  30  |     this.password = page.getByLabel('Password');
  31  |     this.loginButton = page.getByRole('button', { name: 'Login' });
  32  | }
  33  | 
  34  | async goto() :Promise<void>
  35  | {
  36  | 
  37  |     await this.navigate(`${config.baseUrl}${config.loginPath}`);
  38  | 
  39  | } 
  40  | 
  41  | async login (email :string ,password :string ):Promise<void>
  42  | {
  43  |     await this.fill(this.email,email);
  44  |     await this.fill(this.password,password);
  45  |     await this.click(this.loginButton);
  46  | }
  47  |  async verifyLoginSuccess(): Promise<void>
  48  |  {
  49  |     const currentUrl = this.page.url();
> 50  |     await expect(this.page).not.toHaveURL(/accountLogin/);
      |                                 ^ Error: expect(page).not.toHaveURL(expected) failed
  51  |  }
  52  |     async isLoaded(): Promise<void> {
  53  |         await expect(this.email).toBeVisible();
  54  |         await expect(this.password).toBeVisible();
  55  |         await expect(this.loginButton).toBeVisible();
  56  |     }
  57  |     
  58  | 
  59  | 
  60  | }
  61  | 
  62  | /*
  63  | import{test, expect} from '@playwright/test';
  64  | import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';
  65  | 
  66  | 
  67  | // CHANGE: Read credentials from environment variables ONLY - no hardcoded
  68  | // fallback values.
  69  | // BEFORE:
  70  | //   await loginPage.login(process.env.TEST_EMAIL || 'user2402@gmail.com',
  71  | //                          process.env.TEST_PASSWORD || 'Admin@123');
  72  | // WHY THIS WAS CHANGED (security fix, not just style):
  73  | // Hardcoding a real-looking email/password directly in source code means
  74  | // those credentials get committed to git history permanently - even if
  75  | // removed later, they remain recoverable from old commits. If this repo is
  76  | // ever made public, forked, or shared, that's a leaked credential incident.
  77  | // Test credentials should live ONLY in .env files (which are .gitignored)
  78  | // or in your CI/CD pipeline's secret manager - never as a fallback literal
  79  | // in code.
  80  | //
  81  | // Instead, we now FAIL FAST with a clear error if the env vars are missing,
  82  | // rather than silently falling back to a hardcoded value. This surfaces
  83  | // misconfiguration immediately instead of masking it.
  84  | 
  85  | //MASKED *****
  86  | const TEST_EMAIL = process.env.TEST_EMAIL;
  87  | const TEST_PASSWORD = process.env.TEST_PASSWORD;
  88  | 
  89  | if (!TEST_EMAIL || !TEST_PASSWORD) {
  90  |     throw new Error(
  91  |         'Missing TEST_EMAIL or TEST_PASSWORD environment variable. ' +
  92  |         'Set these in your .env file or CI/CD secrets before running tests.'
  93  |     );
  94  | }
  95  | 
  96  | test.describe('Kapruka Login Test', () =>
  97  | {
  98  |     test('Valid user should login successfully', async({page}) =>
  99  |         {
  100 |             const loginPage = new LoginPage_SOLID(page);
  101 |             await loginPage.goto();
  102 |             await loginPage.isLoaded();
  103 |             // CHANGE: Now uses the validated TEST_EMAIL / TEST_PASSWORD
  104 |             // constants above instead of inline env reads with hardcoded
  105 |             // fallbacks.
  106 |             await loginPage.login(TEST_EMAIL, TEST_PASSWORD);
  107 |             await loginPage.verifyLoginSuccess();
  108 | 
  109 | 
  110 |         })
  111 | });
  112 | //Fixed test - 'Hello'
  113 | //Variable inside text - `Hello ${name}
  114 | //LOCAL MACHINE - .env files
  115 | //CI CD - vault - credentials are masked - not displayed in plain english language
  116 | */
```