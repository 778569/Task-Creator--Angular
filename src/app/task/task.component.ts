import { Component, Input } from '@angular/core';
import { TodotaskComponent } from "./todotask/todotask.component";
import { NewTodotaskComponent } from "./new-todotask/new-todotask.component";
import { NewTask } from './todotask/tototask.model';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [TodotaskComponent, NewTodotaskComponent]
})





export class TaskComponent {


  constructor(private taskService: TaskService) {}

  isAddingTask = false;


  @Input({required: true}) userId? : string;
  @Input({required: true}) Username? : string;

  get selectedUserTasks(){
    return this.taskService.getUserTracks(this.userId!)
  }


  CompltedTask(Todoid:string){
 this.taskService.removeTask(Todoid)
  }


  onStartAddTask() {
    return this.isAddingTask = true
  }


  IsClancelTask(){
    this.isAddingTask = false;
  }


appendNewTasks(tasks:NewTask){
this.taskService.addTasks(tasks,this.userId!)
this.isAddingTask = false;

}

}
