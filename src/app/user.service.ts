import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Stock } from './stock.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserComponent } from './user/user.component';
import { Component, OnInit, Input } from '@angular/core';



@Injectable()


export class UserService {

  newStockTable: Stock[];

  doughnutChartLabels = [];
  doughnutChartData = [];

  lineChartColors:Array<any> = [
      { // grey
        backgroundColor: ['#c96c1c', '#e2ad39', '#097275', '#f4e9cd', '#03444a'],
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'red',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

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

    this.stocks = this.getStocks();
    this.stocks.subscribe(userStocks => {
      this.newStockTable = userStocks;
    });
    setTimeout(() => {
      console.log(this.newStockTable);
      for (let stock of this.newStockTable) {
        console.log(stock)
        this.doughnutChartLabels.push(stock.name);
        this.doughnutChartData.push(stock.shares);
      }
    }, 2000);

  }
}

  // refreshChart()
  //
  //   var refreshStocks = this.getStocks()
