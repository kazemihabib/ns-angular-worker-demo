import { Injectable } from '@angular/core';

@Injectable()
export class MyService{

    private worker:any;

    constructor(){
        this.worker = new Worker('./worker');

        this.worker.onmessage = function(msg){
            console.log('in worker.service ',msg.data);
        }

    }

    sendMessage(data){
        this.worker.postMessage(data);
    }
}