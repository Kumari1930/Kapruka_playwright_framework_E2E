

//import '.env/config';
import { test } from '@playwright/test';

import { loginPage } from '../../pages/loginPage';

const TEST_EMAIL = process.env.TEST_EMAIL?.trim();
const TEST_PASSWORD = process.env.TEST_PASSWORD?.trim();

const credentialsMissing = !TEST_EMAIL || !TEST_PASSWORD;

if (credentialsMissing) {
    throw new Error(
        'Missing TEST_EMAIL or TEST_PASSWORD. Set them in config/.env.qa or a local .env file before running the login test.'
    );
}

test.describe('Kapruka Login Test', () => {
    test('Valid user should login successfully', async ({ page }) => {
        const loginPage1 = new loginPage(page);
        await loginPage1.goto();
        await loginPage1.isLoaded();
        await loginPage1.login(TEST_EMAIL, TEST_PASSWORD);
       // await loginPage1.verifyLoginSuccess();
    });
});
