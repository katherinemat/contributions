import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrpService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    let x = this.http.get(`http://www.opensecrets.org/api/?method=candIndustry&output=json&cid=N00007360&cycle=2016&apikey=6b4ad75be498af7239f6ff551d3d4362`)
    .map((res:Response) => res.json());
    return x;
  }

}
