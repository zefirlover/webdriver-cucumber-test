const { Given, When, Then } = require('@wdio/cucumber-framework');

const SearchPage = require('../pageobjects/search.page')
const Page = require('../pageobjects/page')

Given(/^I am on webdriverio page$/, async () => {
    await Page.mainPage;
});

When(/^I click on search$/, async () => {
    await SearchPage.btnSearch.click();
});

Then(/^I type (\w+) to search$/, async (word) => {
    await SearchPage.inputSearch.setValue(word);
});

