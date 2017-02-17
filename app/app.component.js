"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Test';
        this.taskItems = [
            {
                name: 'Task #1',
                id: 1,
            },
            {
                name: 'Task #2',
                id: 2,
            },
            {
                name: 'Task #3',
                id: 3,
            }
        ];
        this.clickHandler = function () {
            console.log(this.name);
        };
    }
    AppComponent.prototype.removeHandler = function (id) {
        console.log(id);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-angular-app',
        templateUrl: 'app.component.html',
        styles: ['div { color: red }']
    })
], AppComponent);
exports.AppComponent = AppComponent;
