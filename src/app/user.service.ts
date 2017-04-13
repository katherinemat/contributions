import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Stock } from './stock.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserComponent } from './user/user.component';


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

  getStockById(stockId: string) {
    return this.angularFire.database.object('/stocks/' + stockId)
  }

  addStockToFirebase(addedStock: Stock){
    console.log("service " + addedStock);
    this.stocks.push(addedStock);
  }

  deleteStock(localStockToDelete) {
    console.log("localStockToDelete service " + localStockToDelete.$key);
    var stockEntryinFirebase = this.getStockById(localStockToDelete.$key);
    console.log("stock entry in fb" + stockEntryinFirebase);
    stockEntryinFirebase.remove();
  }

  updateStock(localUpdatedStock) {
    var stockEntryinFirebase = this.getStockById(localUpdatedStock.$key);
    stockEntryinFirebase.update({shares: localUpdatedStock.shares});
  }


}
