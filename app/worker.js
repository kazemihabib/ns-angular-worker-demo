"use strict";
require("globals");
var testClass_1 = require("./testClass");
global.onmessage = function (msg) {
    console.log('in Worker onmessage: ', msg.data);
    console.log(testClass_1.hello());
    global.postMessage('hey this is from worker');
};
//# sourceMappingURL=worker.js.map