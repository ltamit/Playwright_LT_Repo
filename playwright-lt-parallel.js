const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

const parallelTests = async (capability) => {
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await chromium.connectOverCDP({
    endpointURL: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

   // Open new page
   const page = await browser.newPage();

   // Go to https://lambdatest.github.io/sample-todo-app/
   await page.goto('https://lambdatest.github.io/sample-todo-app/');
 
   // Check input[name="li1"]
   await page.locator('input[name="li1"]').check();
 
   // Check input[name="li2"]
   await page.locator('input[name="li2"]').check();
 
   // Check input[name="li3"]
   await page.locator('input[name="li3"]').check();
 
   // Click [placeholder="Want to add more"]
   await page.locator('[placeholder="Want to add more"]').click();
 
   // Fill [placeholder="Want to add more"]
   await page.locator('[placeholder="Want to add more"]').fill('Sixth Item');
 
   // Click text=add
   await page.locator('text=add').click();
 
   // Click [placeholder="Want to add more"]
   await page.locator('[placeholder="Want to add more"]').click();
 
   // Fill [placeholder="Want to add more"]
   await page.locator('[placeholder="Want to add more"]').fill('Seventh Item');
 
   // Click text=add
   await page.locator('text=add').click();
 
   // Check input[name="li6"]
   await page.locator('input[name="li6"]').check();


  await browser.close()
}

// Capabilities array for with the respective configuration for the parallel tests
const capabilities = [
  {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'LT Parallel Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 10 - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true
    }
  },
  {
    'browserName': 'MicrosoftEdge',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 8',
      'build': 'LT Parallel Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true
    }
  },
  {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'MacOS Big sur',
      'build': 'LT Parallel Playwright Sample Build',
      'name': 'Playwright Sample Test on MacOS Big sur - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true
    }
  }]

capabilities.forEach(async (capability) => {
  await parallelTests(capability)
})
