const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium',
        args: [
            '--no-sandbox',
        ]
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/', {waitUntil: 'networkidle2'});
    let e = await page.$("div#hplogo");
    if (e) {
      let p = await e.getProperty("title");
      if (p) {
         console.log(`Todays doodle: ${await p.jsonValue()}`);
      }
    }
    browser.close();
})();
