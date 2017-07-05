import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {
    public userList: any = [];

    constructor(private http: Http) {
        this.getUserList();
    }

    private getUserList(): void {
        this.http.get('http://www.mrvconsulting.fr:8081/users/list').subscribe((data: Response) => {
            const usersObject = data.json();
            Object.keys(usersObject).map((userKey) => {
                this.userList.push(usersObject[userKey]);
            });
        });
    }
}
