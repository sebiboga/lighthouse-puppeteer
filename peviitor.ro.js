

const fs = require('fs');
const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    const lhApi = await import('lighthouse'); // v10.0.0 or later
    const flags = {
        screenEmulation: {
            disabled: true
        }
    }
    const config = lhApi.desktopConfig;
    const lhFlow = await lhApi.startFlow(page, {name: 'peviitor.ro', config, flags});
    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1519,
            height: 184
        })
    }
    await lhFlow.startNavigation();
    {
        const targetPage = page;
        await targetPage.goto('https://peviitor.ro/');
    }
    await lhFlow.endNavigation();
    await lhFlow.startNavigation();
    {
        const targetPage = page;
        await targetPage.goto('https://peviitor.ro/');
    }
    await lhFlow.endNavigation();
    await lhFlow.startTimespan();
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Caută un loc de muncă)'),
            targetPage.locator('form > div.flex input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/main/div[3]/div/div/form/div[1]/div/input)'),
            targetPage.locator(':scope >>> form > div.flex input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 205.76248168945312,
                y: 13.399993896484375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Caută un loc de muncă)'),
            targetPage.locator('form > div.flex input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/main/div[3]/div/div/form/div[1]/div/input)'),
            targetPage.locator(':scope >>> form > div.flex input')
        ])
            .setTimeout(timeout)
            .fill('tester');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Caută)'),
            targetPage.locator('button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/main/div[3]/div/div/form/button)'),
            targetPage.locator(':scope >>> button'),
            targetPage.locator('::-p-text(Caută)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 54.4124755859375,
                y: 23.399993896484375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Încarcă mai multe)'),
            targetPage.locator('#root > div > div:nth-of-type(2) > button.undefined'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div[2]/button[1])'),
            targetPage.locator(':scope >>> #root > div > div:nth-of-type(2) > button.undefined'),
            targetPage.locator('::-p-text(Încarcă mai multe)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80.9124755859375,
                y: 24.79999542236328,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Încarcă mai multe)'),
            targetPage.locator('#root > div > div:nth-of-type(2) > button.undefined'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div[2]/button[1])'),
            targetPage.locator(':scope >>> #root > div > div:nth-of-type(2) > button.undefined'),
            targetPage.locator('::-p-text(Încarcă mai multe)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80.9124755859375,
                y: 24.79999542236328,
              },
            });
    }
    await lhFlow.endTimespan();
    const lhFlowReport = await lhFlow.generateReport();
    fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
