import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {TaskModule} from "./task/task.module";

@NgModule({
    imports: [BrowserModule, TaskModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}