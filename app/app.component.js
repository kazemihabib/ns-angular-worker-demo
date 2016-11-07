"use strict";
var core_1 = require("@angular/core");
var worker_service_1 = require('./worker.service');
var AppComponent = (function () {
    function AppComponent(myService) {
        this.myService = myService;
        this.counter = 16;
        this.worker = new Worker('./worker');
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
        this.myService.sendMessage('hi');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            providers: [worker_service_1.MyService]
        }), 
        __metadata('design:paramtypes', [worker_service_1.MyService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map