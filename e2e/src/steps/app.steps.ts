import { Before, Given, Then, When, After, Status } from 'cucumber';
import { expect } from 'chai';
import { browser, promise } from 'protractor';
import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

// export function takeScreenshot(world, stepToExecute: () => promise.Promise<any>): promise.Promise<any> {
// 	return stepToExecute().then(() => {
// 		return doTakeScreenshot(world);
// 	}).catch((err) => {
// 		return doTakeScreenshot(world).then(() => {
// 			throw err;
// 		});
// 	});
// }

// function doTakeScreenshot(world) {
// 	return browser.takeScreenshot().then((screenshot) => {
// 		world.attach(screenshot, 'image/png');
// 	}).catch((err) => {
// 		console.warn('Could not create screenshot', err);
// 	});
// }

After(async function(step) {

    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');

  });


Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
  // return takeScreenshot(this, async () => {
  //   await page.navigateTo();
  // });
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
  // return takeScreenshot(this, async () => {
  //   expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
  // });
});
