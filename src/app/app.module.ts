import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TplComponent } from './tpl/tpl.component';
import { UserTableComponent } from './user-table/user-table.component';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    TplComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
