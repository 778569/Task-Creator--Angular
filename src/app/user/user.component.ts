import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) avater! : string;
  @Input({required: true}) name! : string;
  @Input({required: true}) id! : string;

  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.avater
  }
  onSelectUser(){
    this.select.emit(this.id)
  }
}
