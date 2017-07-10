import { Component, OnInit } from '@angular/core';
import {UsersService, IUser, MUser} from '../services/users.service';
declare const $: any;

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.less']
})
export class UserTableComponent implements OnInit {
  private userList: any = [];
  constructor(public usersService: UsersService) {
    // setTimeout(() => {
    //   console.log(this.usersService.userList);
    // }, 5000);

  }

  ngOnInit() {
  }

  public addUser() {
    const user: IUser = new MUser();
    user.id = this.usersService.getNewId();
    this.usersService.selectedUser = user;
  }

  public delete(user) {
    this.usersService.deleteUser(user);
    this.closeForm();
  }

  private closeForm() {
    $('#exampleModal').modal('hide');
    setTimeout(() => {
      this.usersService.selectedUser = null;
    }, 500);
  }
}
