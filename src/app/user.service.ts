import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Stock } from './stock.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class UserService {

  users: FirebaseListObservable<any[]>;
  stocks: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
    this.stocks = angularFire.database.list('stocks');
  }

  getUsers() {
    return this.users;
  }

  getStocks() {
    return this.stocks;
  }

  getUserById() {
    return this.angularFire.database.object('users/0')
  }

  addStockToFirebase(addedStock: Stock){
    console.log("service " + addedStock);
    this.stocks.push(addedStock);
  }


}
