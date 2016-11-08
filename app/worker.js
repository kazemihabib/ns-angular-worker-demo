"use strict";
// declare var postMessage:any;
var globals = require("globals");
var testClass_1 = require("./testClass");
onmessage = function (msg) {
    console.log('in Worker onmessage: ', msg.data);
    console.log(testClass_1.hello());
};
//# sourceMappingURL=worker.js.map