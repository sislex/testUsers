import {EventEmitter, Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

export interface IUser {
    id?: number;
    name: string;
    password: string;
    profession: string;
    deletable: boolean;
    editable: boolean;
}

export class MUser {
    public id: number = null;
    public name: string = '';
    public password: string = '';
    public profession: string = '';
    public deletable: boolean = true;
    public editable: boolean = true;

    constructor(user: IUser = null) {
        if (user) {
            this.id = user.id;
            this.name = user.name;
            this.password = user.password;
            this.profession = user.profession;
            this.deletable = user.deletable;
            this.editable = user.editable;
        }
    }
}

@Injectable()
export class UsersService {
    public userList: null|IUser[] = [];
    public _selectedUser: null|IUser = null;

    selectedUserUpdated: any = new EventEmitter();

    set selectedUser(selectedUser) {
        this._selectedUser = selectedUser;
        this.selectedUserUpdated.emit(this.selectedUser);
    }

    get selectedUser() {
        return this._selectedUser;
    }
    constructor(private http: Http) {
        this.getUserList();
    }

    public deleteUser(user: IUser) {
        return this.http.delete('http://www.mrvconsulting.fr:8081/users/delete/' + user.id).subscribe((data: Response) => {
            this.userList = [];
            const usersObject = data.json();
            Object.keys(usersObject).map((userKey) => {
                this.userList.push(usersObject[userKey]);
            });
        });
    }

    public addUser(user: IUser) {
        return this.http.post('http://www.mrvconsulting.fr:8081/users/add', user).subscribe((data: Response) => {
            this.userList.push(new MUser(data.json()));
        });
    }

    public editUser(user: IUser) {
        return this.http.put('http://www.mrvconsulting.fr:8081/users/edit/' + user.id, user).subscribe((data: Response) => {
            const userObject = data.json();
            const filtredList = this.userList.filter((user) => user.id === userObject.id);
            if (filtredList.length === 1) {
                filtredList[0] = new MUser(userObject);
            }
        });
    }

    public getUserById(id: number|string) {
        this.http.get('http://www.mrvconsulting.fr:8081/users/' + id).subscribe((data: Response) => {
            const userObject = data.json();
        });
    }

    private getUserList(): void {
        this.http.get('http://www.mrvconsulting.fr:8081/users/list').subscribe((data: Response) => {
            const usersObject = data.json();
            Object.keys(usersObject).map((userKey) => {
                this.userList.push(usersObject[userKey]);
            });
        });
    }

    public getNewId() {
        let maxId = 0;
        for (const user of this.userList) {
            if (user.id > maxId) {
                maxId = user.id;
            }
        }

        return maxId + 1;
    }

}
