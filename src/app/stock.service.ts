import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {
  constructor (
    private http: Http
  ) {}

  getStockInfo(symbol) {

    let x = this.http.get('http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&interval=1min&apikey=0945')
    .map((res:Response) => res.json());
    // console.log(x);
    return x;
  }

  getOrgSymbol(company) {
    // let company = "amazon";
    let x = this.http.get('http://stocksearchapi.com/api/?search_text=' + company + '&api_key=60a2b02d5c7236f9450294d21d37c61bdc592e75')
    .map((res:Response) => res.json());
    return x;
  }

}
