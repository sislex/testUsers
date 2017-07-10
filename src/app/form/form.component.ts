// import { Component, OnInit } from '@angular/core';
import {Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {UsersService} from '../services/users.service';
declare const $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  public user = null;
  constructor(public usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.selectedUserUpdated.subscribe((user) => {
      if (user) {
        this.user = Object.assign({}, user);
      }
    });
  }

  public submit() {
    Object.assign(this.usersService.selectedUser, this.user);
    if (this.usersService.selectedUser.id === this.usersService.getNewId()) {
      this.usersService.addUser(this.usersService.selectedUser);
    } else {
      this.usersService.editUser(this.usersService.selectedUser);
    }
    this.closeForm();
  }

  public closeForm() {
    $('#exampleModal').modal('hide');
    setTimeout(() => {
      this.usersService.selectedUser = null;
    }, 500);
  }

}
