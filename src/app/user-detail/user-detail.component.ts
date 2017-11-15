import {
  AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit, OnChanges {

  private editName = false;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.editName = false;
  }

  onNameClick() {
    this.editName = true;
  }
}
