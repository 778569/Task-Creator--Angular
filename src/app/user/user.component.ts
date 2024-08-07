import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";



@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    
})


export class UserComponent {


  @Input({required: true}) User! : User;
  @Output() select = new EventEmitter<string>();

  @Input() selected! : boolean;

  get imagePath(){
    return 'assets/users/' + this.User.avatar
  }
  onSelectUser(){
    this.select.emit(this.User.id)
  }
}
