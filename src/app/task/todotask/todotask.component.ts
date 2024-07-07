import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tototask.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';



@Component({
    selector: 'app-todotask', 
    templateUrl: './todotask.component.html',
    styleUrl: './todotask.component.css',
   
})
export class TodotaskComponent {

@Input({required:true}) task? : Task
@Output() complet = new EventEmitter<string>()


 todoTaskCompleted(){
this.complet.emit(this.task?.id)
 }
}
