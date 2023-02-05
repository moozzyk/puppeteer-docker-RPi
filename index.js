const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium',
        args: [
            '--no-sandbox',
            // '--disable-gpu,
            // '--disable-dev-shm-usage',
            // '--disable-setuid-sandbox',
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://bing.com/', {waitUntil: 'networkidle2'});
    let e = await page.$('h1#headline');
    let p = await e.getProperty('textContent');
    if (p) {
      console.log(`Today's headline: ${await p.jsonValue()}`);
    } else {
      console.log('No headline found');
    }
    browser.close();
})();
