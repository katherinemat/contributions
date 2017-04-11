import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {
  constructor (
    private http: Http
  ) {}

  getStockInfo() {
    let x = this.http.get('http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&interval=1min&apikey=7717')
    .map((res:Response) => res.json());
    // console.log(x);
    return x;
  }

}
