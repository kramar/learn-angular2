"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var TaskComponent = (function () {
    function TaskComponent(fb) {
        this.fb = fb;
        this.defaultFormState = {};
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.defaultFormState.label = this.taskLabel;
        this.form = this.fb.group({
            label: [this.defaultFormState.label, forms_1.Validators.minLength(2)]
        });
    };
    ;
    TaskComponent.prototype.revertForm = function () {
        this.form.reset(this.defaultFormState);
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input()
], TaskComponent.prototype, "taskNumber", void 0);
__decorate([
    core_1.Input()
], TaskComponent.prototype, "taskLabel", void 0);
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '[myTask]',
        templateUrl: 'task.component.html',
        styles: ['div { color: green }']
    }),
    __param(0, core_1.Inject(forms_1.FormBuilder))
], TaskComponent);
exports.TaskComponent = TaskComponent;
