import {Component} from "@angular/core";
import {MyService} from './worker.service';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    providers:[MyService]
})
export class AppComponent {
    public worker;
    constructor(private myService:MyService){
        this.worker = new Worker('./worker');
    }
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
        this.myService.sendMessage('hi');

    }
}
