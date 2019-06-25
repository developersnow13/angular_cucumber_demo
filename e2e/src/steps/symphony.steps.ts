import { Before, Given, Then, When, After, Status } from 'cucumber';
import { expect } from 'chai';
import { browser, promise, protractor, element, by } from 'protractor';
import { AppPage } from '../pages/app.po';

let page: AppPage;
const EC = protractor.ExpectedConditions;

Before(() => {
  page = new AppPage();
});

// Given Symphony portal is up
//         And login page is displayed
//         When user logs in
//         Then homepage with investigation module is displayed

Given(/^Symphony portal is up$/, async () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://itsusralsp07482.jnj.com:7443/reliance/reliance');
  });

Given(/^login page is displayed$/, async () => {});

When(/^user logs in$/, async () => {
    element(by.xpath('//input[@name="ETQ$LOGIN_USERNAME"]')).sendKeys('Test-Automation1');
    element(by.xpath('//input[@name="ETQ$LOGIN_PASSWORD"]')).sendKeys('Test1');
    element(by.xpath('//a[@class="LoginButton"]')).click();
});

Then(/^homepage with investigation module is displayed$/, async () => {
    browser.wait(EC.visibilityOf(element(by.xpath('//td/span[contains(text(),"Test-Automation1")]'))), 5000).then(result => {
    // element(by.xpath('//span/em[contains(text(),"Investigation")]')).click();
    // browser.wait(EC.visibilityOf(element(by.xpath('//td/span[contains(text(),"Test-Automation1")]'))), 10000).then(result => {
    // // expect(element(by.xpath('//td/span[contains(text(),"Test-Automation1")]')).isDisplayed()).true();
    //     });
    });
});
