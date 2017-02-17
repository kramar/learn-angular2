import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-angular-app',
    templateUrl: 'app.component.html',
    styles: ['div { color: red }']
})
export class AppComponent {
    name = 'Test';

    taskItems:Array<Task> = [
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

    clickHandler = function () {
        console.log(this.name);
    };

    removeHandler(id:number) {
        console.log(id);
    }
}