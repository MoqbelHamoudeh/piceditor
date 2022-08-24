const {client} = require('nightwatch-api');
const {cli} = require("nightwatch");
const assert = require("assert");
const {src_folders} = require("nightwatch/lib/settings/defaults");

const picresizeCommands = {


    async cookiesPage() {
        await client.useXpath().isVisible('//*[@class="pastable"]', async res => {
            if (res.value === true) {
                console.log('cookies page exists');
                client.useXpath().click('//*[@aria-label="Consent"]');

            } else {
                console.log('cookies page does not exists');
            }
        })
    },
    async verifyPageLoads() {
        await client.useXpath().waitForElementVisible(this.elements.homeIcon.selector, 2000);
    },
    async uploadPic() {
        await client.setValue(this.elements.picInput.selector, require('path').resolve(this.elements.picToUpload.selector));
        await client.useXpath().waitForElementVisible(this.elements.editsPage.selector);
        // await client.useXpath().click(this.elements.downloadPic.selector);// save download
    },
    async editPic() {
        await client.useXpath().click(this.elements.rotatePic.selector);
        await client.useXpath().waitForElementVisible(this.elements.validateRotation.selector);
        await client.useXpath().click(this.elements.flipPic.selector);
        await client.useXpath().click(this.elements.saveChanges.selector);
    },
    async finalPic() {
        await client.useXpath().waitForElementVisible(this.elements.finalPage.selector);
        await client.useXpath().click(this.elements.downloadPic.selector);

    }


};
module.exports = {
    url: 'https://picresize.com/',
    commands: [picresizeCommands],
    elements: {
        homeIcon: {
            selector: '//*[@class="navbar-brand"]',
            LocateStrategy: 'xpath',
        },
        flipPic: {
            selector: '//*[@name="im_flip_hor"]',
            LocateStrategy: 'xpath',

        },

        picInput: {
            selector: '//*[@id="im_file"]',
            LocateStrategy: 'xpath',
        },
        picToUpload: {
            selector: 'testphoto.jpg',
            LocateStrategy: 'xpath',
        },
        rotatePic: {
            selector: '//*[@name="im_rotate_cw"]',
            LocateStrategy: 'xpath',
        },
        editsPage: {
            selector: '//*[text()="Crop and Rotate Your Picture: "]',
            LocateStrategy: 'xpath',
        },
        downloadPic: {
            selector: '//*[text()="Save to Disk"]',
            LocateStrategy: 'xpath',
        },
         saveChanges:{
             selector: '//*[contains(text(),"Resize My Picture")]',
             LocateStrategy: 'xpath',
         },
        validateRotation:{
            selector: '//*[text()=" Flip"]/../..',
            LocateStrategy: 'xpath',
},
        finalPage: {
            selector: '//*[@alt="Learn more about PicResize Pro"]',
            LocateStrategy: 'xpath',
        },
}};