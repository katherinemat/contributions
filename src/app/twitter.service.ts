import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    let x = this.http.get('https://www.quandl.com/api/v3/datatables/AR/MWCS/metadata.json?api_key=FI0009000681&api_key=g45GkJUq-TBQEwsMQX6r')
    .map((res:Response) => res.json());
    console.log(x);
    return x
  }

}
