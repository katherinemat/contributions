import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
