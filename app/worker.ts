// declare var postMessage:any;
var globals = require("globals");
import {testClass} from './testClass';

onmessage = (msg)=> {

    console.log('in Worker onmessage: ',msg.data);
    // postMessage('hello');
};
