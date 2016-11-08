"use strict";
var core_1 = require("@angular/core");
var testClass_1 = require("./testClass");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
        this.worker = new Worker('./worker');
        this.worker.onmessage = function (msg) {
            console.log('data ', msg.data);
        };
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        console.log('in AppComponent ', testClass_1.hello());
        this.worker.postMessage('hi');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map