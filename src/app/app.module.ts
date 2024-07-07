
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/Header.Component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { BrowserModule } from "@angular/platform-browser";

import { TodotaskComponent } from "./task/todotask/todotask.component";
import { NewTodotaskComponent } from "./task/new-todotask/new-todotask.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";
import { TaskModule } from "./task/task.module";

@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent],
    bootstrap:[AppComponent],
    imports:[ BrowserModule,FormsModule,SharedModule,TaskModule],
})

export class AppModule{}