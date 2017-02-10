import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-angular-app',
    templateUrl: 'app.component.html',
    styles: ['div { color: red }']
})
class AppComponent {
    name = 'Test';

    clickHandler = function () {
        console.log(this.name);
    };

    removeHandler() {
        console.log(123123);
    }
}

export default AppComponent;