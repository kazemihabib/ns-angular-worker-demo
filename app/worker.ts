// declare var postMessage:any;
var globals = require("globals");
import {hello} from "./testClass";

onmessage = (msg)=> {

    console.log('in Worker onmessage: ',msg.data);
    console.log(hello());
};
