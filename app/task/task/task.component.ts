import {Component, Input, Output, EventEmitter, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: '[myTask]',
    templateUrl: 'task.component.html',
    styles: ['div { color: green }']
})
export class TaskComponent implements OnInit {

    @Input() taskNumber:number;
    @Input() taskLabel:string;

    defaultFormState: any = {};
    form: FormGroup;

    constructor(@Inject(FormBuilder) private fb: FormBuilder){
    }

    ngOnInit() {
        this.defaultFormState.label = this.taskLabel;

        this.form = this.fb.group({
            label: [this.defaultFormState.label, Validators.minLength(2)]
        });
    };

    revertForm(){
        this.form.reset(this.defaultFormState);
    }


    //@Output() onDelete = new EventEmitter();
    /*remove() {
        this.onDelete.emit();
    }*/


}