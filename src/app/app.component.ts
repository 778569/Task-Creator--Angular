import { Component } from '@angular/core';
import { HeaderComponent } from './header/Header.Component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TaskComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {

  
users =DUMMY_USERS;
SetClickid! : string

get NameFind(){

  
    return this.users.find((user)=> user.id === this.SetClickid)
   

}


onSelectuser(id:string){
 this.SetClickid =  id
}
}
