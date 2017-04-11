import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {
  constructor (
    private http: Http
  ) {}

  getStockInfo() {
    var symbol = "MSFT";
    let x = this.http.get('http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&interval=1min&apikey=7717')
    .map((res:Response) => res.json());
    // console.log(x);
    return x;
  }

}
