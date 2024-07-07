import { NgModule } from "@angular/core";
import { TodotaskComponent } from "./todotask/todotask.component";
import { NewTodotaskComponent } from "./new-todotask/new-todotask.component";
import { TaskComponent } from "./task.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations:[TodotaskComponent, NewTodotaskComponent,TaskComponent],
    exports:[TaskComponent],
    imports:[SharedModule,CommonModule,FormsModule]
})

export class TaskModule{

}