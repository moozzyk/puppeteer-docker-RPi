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
    await page.goto('https://www.google.com/', {waitUntil: 'networkidle2'});
    let e = await page.$('div#hplogo');
    let p = await e?.getProperty('title');
    if (p) {
      console.log(`Today's Doodle: ${await p.jsonValue()}`);
    } else {
      console.log('No Doodle today :(');
    }
    browser.close();
})();
