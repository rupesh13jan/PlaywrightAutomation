const { After, Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('chai');
const path = require('path');

const { getHomePageTitle } = require(path.join(process.cwd(), 'utils', 'helpers'));

let browser;
let page;

Given('I am on the Guru99 homepage', async () => {
    browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.guru99.com/');
});

Then('the title should be {string}', async (expectedTitle) => {
  const actualTitle = await getHomePageTitle(page);
  expect(actualTitle).to.equal(expectedTitle);
});

After(async () => {
  await browser.close();
});
