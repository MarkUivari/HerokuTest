import {Component, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {User} from '../user';

import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent implements OnInit {

  @Input() users: Array<User>;
  @Output() SelectUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(user: User) {
    this.SelectUser.emit(user);
  }

}
