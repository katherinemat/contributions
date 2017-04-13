import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { Stock } from '../stock.model';
import { UserService } from '../user.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PiechartComponent } from '../piechart/piechart.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  stocks: FirebaseListObservable<any[]>;
  stockObjects: Stock[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.stocks = this.userService.getStocks();
    this.stocks.subscribe(userStocks => {
      this.stockObjects = userStocks;
      console.log(this.stockObjects);
    });
  }

  beginDeletingStock(stockToDelete) {
    if(confirm("Are you sure you want to delete this stock from your profile?")) {
      this.userService.deleteStock(stockToDelete);
    }
    console.log("component " + stockToDelete);
  }

}
