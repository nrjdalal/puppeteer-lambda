const puppeteer = require('puppeteer-core')
const chromium = require('@sparticuz/chromium')

const scraper = async () => {
  let browser = null

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,

      executablePath: await chromium.executablePath,
    })
  } catch {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,

      executablePath: '/usr/bin/google-chrome',
    })
  }

  const page = await browser.newPage()
  await page.goto('https://example.com')
  console.log(await page.title())

  if (browser !== null) {
    await browser.close()
  }
}

scraper()
