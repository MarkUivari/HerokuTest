import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UserService]
})
export class UserCenterComponent implements OnInit {

  users: Array<User>;

  selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getVideos()
      .subscribe(resUserData => this.users = resUserData);
  }

  onSelectUser(user: User) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
}
