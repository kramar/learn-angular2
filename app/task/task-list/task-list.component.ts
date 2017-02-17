import {Component, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-task-list',
    templateUrl: 'task-list.component.html',
    styles: ['div { color: green }']
})

export class TaskListComponent {

    @Input() taskItems:Array<Task>;
}