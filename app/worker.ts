require("globals");
import {hello} from "./testClass";
global.onmessage = (msg)=> {

   console.log('in Worker onmessage: ',msg.data);
   console.log(hello());
   global.postMessage('hey this is from worker');
};
