import puppeteer from "puppeteer"

async function openWebPage () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200
  })
    const page = await browser.newPage()
    await page.goto("https://www.google.com")
    await browser.close()
}

// openWebPage()

async function captureScreenshoot () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200
  })
    const page = await browser.newPage()
    await page.goto("https://web.whatsapp.com/")
    await page.screenshot({path: "wtpExample.png" })
    await browser.close()
}

// captureScreenshoot()


async function navegateWebPage () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400
  })
    const page = await browser.newPage()
    await page.goto("https://www.shutterstock.com/es/generate/images/945be715-99d7-4254-8204-d5e34dbb4a25")
    await page.click('buttondata-automation="Generate_Asset_Overlay_FullSizeComponent"[]')
    await new Promise(resolve => setTimeout(resolve, 400));
    await page.screenshot({path: "biee.png"})
    await browser.close()
}

navegateWebPage ()

