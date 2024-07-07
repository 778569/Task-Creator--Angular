import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../todotask/tototask.model';

@Component({
  selector: 'app-new-todotask',
  templateUrl: './new-todotask.component.html',
  styleUrl: './new-todotask.component.css'
})
export class NewTodotaskComponent {


@Output() isCancel = new EventEmitter<boolean>()

@Output() newTasks = new EventEmitter<NewTask>()

selectedTitel =''
selectedSummary=''
selectedDate=''

  CancelNewTask(){
this.isCancel.emit(true)
  }

  onSubmit(){
this.newTasks.emit({
  title : this.selectedTitel,
  summary: this.selectedSummary,
  dueDate:this.selectedDate
  })
  }
  

} 

