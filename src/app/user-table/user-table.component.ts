import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';


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

}
