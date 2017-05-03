require('babel-register')();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document, window } = new JSDOM(``);

const exposedProperties = ['window', 'navigator', 'document'];

global.document = document;
global.window = window;
Object.keys(window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = window[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;