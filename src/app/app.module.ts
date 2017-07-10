import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TplComponent } from './tpl/tpl.component';
import { UserTableComponent } from './user-table/user-table.component';
import {UsersService} from './services/users.service';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TplComponent,
    UserTableComponent,
    FormComponent
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
