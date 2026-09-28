# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\login_kapruka.spec.ts >> Kapruka Login Test >> Valid user should login successfully
- Location: tests\e2e\login_kapruka.spec.ts:20:9

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "domcontentloaded"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
  - generic [ref=f2e4]:
    - generic [ref=f2e6]:
      - link [ref=f2e8] [cursor=pointer]:
        - /url: https://www.kapruka.com
        - img "logo area" [ref=f2e9]
      - generic [ref=f2e13]:
        - textbox "SEARCH PRODUCTS.." [ref=f2e14]
        - button "online search" [ref=f2e15] [cursor=pointer]:
          - img "Search" [ref=f2e16]
      - generic [ref=f2e17]:
        - combobox "Select Currency" [ref=f2e18]:
          - option "INR" [selected]
          - option "USD"
        - combobox "Select language" [ref=f2e19]:
          - option "Lang"
          - option "සිං"
          - option "Eng" [selected]
        - link [ref=f2e22] [cursor=pointer]:
          - /url: /shops/checkout/deliveryCartViewPage.jsp
        - link "Check Order Status" [ref=f2e30] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
          - img "status" [ref=f2e31]
        - link "Login to Your Account" [ref=f2e33] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
    - list [ref=f2e38]:
      - listitem [ref=f2e39]:
        - generic: All Categories
      - listitem [ref=f2e42]:
        - link "Event Icon Children's Day Offers" [ref=f2e43] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/childrensday
          - img "Event Icon" [ref=f2e45]
          - generic [ref=f2e46]: Children's Day Offers
      - listitem [ref=f2e47]:
        - link "Event Icon Teachers' Day Offers" [ref=f2e48] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/teachersday
          - img "Event Icon" [ref=f2e50]
          - generic [ref=f2e51]: Teachers' Day Offers
      - listitem [ref=f2e52]:
        - link "Same Day Rush delivery" [ref=f2e53] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/samedaydelivery
          - img "Same Day" [ref=f2e55]
          - generic [ref=f2e56]: Rush delivery
      - listitem [ref=f2e57]:
        - link "On Sale" [ref=f2e58] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/promotions
      - listitem [ref=f2e61]:
        - link "Events" [ref=f2e62] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/events_home.jsp
      - listitem [ref=f2e65]:
        - link "Brands" [ref=f2e66] [cursor=pointer]:
          - /url: https://www.kapruka.com/online_brands.jsp
      - listitem [ref=f2e69]:
        - link "For You" [ref=f2e70] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/combogifts
  - generic [ref=f2e78]:
    - list [ref=f2e79]:
      - listitem [ref=f2e80]:
        - link "Home" [ref=f2e81] [cursor=pointer]:
          - /url: https://www.kapruka.com
      - listitem [ref=f2e82]:
        - link "/ Customer Account Login" [ref=f2e83] [cursor=pointer]:
          - /url: "#"
    - heading "Your Shopping Account" [level=1] [ref=f2e84]
    - generic [ref=f2e87]:
      - generic [ref=f2e88]: Your password is wrong. Please try again.
      - generic [ref=f2e90]:
        - generic:
          - generic [ref=f2e91]:
            - heading "New Customers" [level=3] [ref=f2e94]
            - paragraph [ref=f2e95]: If you create an account with us, you will get additional benefits such as order history, bonus cash and more.
            - button "Create Account" [ref=f2e96] [cursor=pointer]
          - generic [ref=f2e97]:
            - heading "Kapruka Members" [level=3] [ref=f2e99]
            - paragraph [ref=f2e100]: If you have a Kapruka account, then enter your e-mail and password here.
            - generic [ref=f2e101]:
              - textbox "Email address" [ref=f2e103]:
                - /placeholder: Enter email
                - text: shilpeeuser@gmail.com
              - generic [ref=f2e104]:
                - textbox "Password" [ref=f2e105]
                - generic [ref=f2e106] [cursor=pointer]
              - button "Login" [ref=f2e107] [cursor=pointer]
              - paragraph
            - generic [ref=f2e108]:
              - link "Forgot your password" [ref=f2e109] [cursor=pointer]:
                - /url: https://www.kapruka.com/shops/customerAccounts/forgot_password.jsp
              - text: "|"
              - link "Account benefits" [ref=f2e110] [cursor=pointer]:
                - /url: javascript:void(0);
          - generic [ref=f2e111]:
            - heading "Or Sign In With" [level=3] [ref=f2e113]
            - generic [ref=f2e114]: Signed in with Google
  - contentinfo [ref=f2e127]:
    - generic [ref=f2e129]:
      - paragraph [ref=f2e131]:
        - text: Kapruka.com -
        - link "Sri Lanka's" [ref=f2e132] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/about.html
        - text: Largest Online Shop
      - navigation [ref=f2e133]:
        - generic [ref=f2e134]:
          - link "About Kapruka" [ref=f2e135] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/about.html
          - text: "|"
          - link "Contact Us" [ref=f2e136] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
          - text: "|"
          - link "Order Tracking" [ref=f2e137] [cursor=pointer]:
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
> 49  |     await this.page.waitForURL(
      |                     ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  50  |         (url) => !url.pathname.includes('accountLogin.jsp'),
  51  |         { timeout: 15000, waitUntil: 'domcontentloaded' }
  52  |     );
  53  |     await expect(this.page).not.toHaveURL(/accountLogin\.jsp.*error=loginError/i);
  54  |  }
  55  |     async isLoaded(): Promise<void> {
  56  |         await expect(this.email).toBeVisible();
  57  |         await expect(this.password).toBeVisible();
  58  |         await expect(this.loginButton).toBeVisible();
  59  |     }
  60  |     
  61  | 
  62  | 
  63  | }
  64  | 
  65  | /*
  66  | import{test, expect} from '@playwright/test';
  67  | import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';
  68  | 
  69  | 
  70  | // CHANGE: Read credentials from environment variables ONLY - no hardcoded
  71  | // fallback values.
  72  | // BEFORE:
  73  | //   await loginPage.login(process.env.TEST_EMAIL || 'user2402@gmail.com',
  74  | //                          process.env.TEST_PASSWORD || 'Admin@123');
  75  | // WHY THIS WAS CHANGED (security fix, not just style):
  76  | // Hardcoding a real-looking email/password directly in source code means
  77  | // those credentials get committed to git history permanently - even if
  78  | // removed later, they remain recoverable from old commits. If this repo is
  79  | // ever made public, forked, or shared, that's a leaked credential incident.
  80  | // Test credentials should live ONLY in .env files (which are .gitignored)
  81  | // or in your CI/CD pipeline's secret manager - never as a fallback literal
  82  | // in code.
  83  | //
  84  | // Instead, we now FAIL FAST with a clear error if the env vars are missing,
  85  | // rather than silently falling back to a hardcoded value. This surfaces
  86  | // misconfiguration immediately instead of masking it.
  87  | 
  88  | //MASKED *****
  89  | const TEST_EMAIL = process.env.TEST_EMAIL;
  90  | const TEST_PASSWORD = process.env.TEST_PASSWORD;
  91  | 
  92  | if (!TEST_EMAIL || !TEST_PASSWORD) {
  93  |     throw new Error(
  94  |         'Missing TEST_EMAIL or TEST_PASSWORD environment variable. ' +
  95  |         'Set these in your .env file or CI/CD secrets before running tests.'
  96  |     );
  97  | }
  98  | 
  99  | test.describe('Kapruka Login Test', () =>
  100 | {
  101 |     test('Valid user should login successfully', async({page}) =>
  102 |         {
  103 |             const loginPage = new LoginPage_SOLID(page);
  104 |             await loginPage.goto();
  105 |             await loginPage.isLoaded();
  106 |             // CHANGE: Now uses the validated TEST_EMAIL / TEST_PASSWORD
  107 |             // constants above instead of inline env reads with hardcoded
  108 |             // fallbacks.
  109 |             await loginPage.login(TEST_EMAIL, TEST_PASSWORD);
  110 |             await loginPage.verifyLoginSuccess();
  111 | 
  112 | 
  113 |         })
  114 | });
  115 | //Fixed test - 'Hello'
  116 | //Variable inside text - `Hello ${name}
  117 | //LOCAL MACHINE - .env files
  118 | //CI CD - vault - credentials are masked - not displayed in plain english language
  119 | */
```