const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
const assert = require("assert");
const {cli} = require("nightwatch");
const picresizePage = client.page.picresizePage();

Given('I open picresize website', async () => {
    await picresizePage.navigate();
    await picresizePage.cookiesPage();
    await picresizePage.verifyPageLoads();
});
When('I upload a photo', async () => {
    await picresizePage.uploadPic();
});
Then('I make some changes to the photo', async () => {
    await picresizePage.editPic();
});
When('I download the edited picture', async () => {
    await picresizePage.finalPic();
});



