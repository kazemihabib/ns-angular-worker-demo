"use strict";
// declare var postMessage:any;
var globals = require("globals");
onmessage = function (msg) {
    console.log('in Worker onmessage: ', msg.data);
    // postMessage('hello');
};
//# sourceMappingURL=worker.js.map