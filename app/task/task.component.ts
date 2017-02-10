import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-task',
    templateUrl: 'task.component.html',
    styles: ['div { color: green }']
})
class TaskComponent {
    @Input() taskNumber:number;
    @Input() taskLabel:string;

    @Output() onRemove = new EventEmitter();

    remove() {
        console.log(1);
        this.onRemove.emit();
    }
}

export default TaskComponent;