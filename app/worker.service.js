"use strict";
var core_1 = require('@angular/core');
var MyService = (function () {
    function MyService() {
        this.worker = new Worker('./worker');
        this.worker.onmessage = function (msg) {
            console.log('in worker.service ', msg.data);
        };
    }
    MyService.prototype.sendMessage = function (data) {
        this.worker.postMessage(data);
    };
    MyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyService);
    return MyService;
}());
exports.MyService = MyService;
//# sourceMappingURL=worker.service.js.map