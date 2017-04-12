import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrpService {
  constructor (
    private http: Http
  ) {}

  getOrgIds(orgName) {
    let result = this.http.get('https://www.opensecrets.org/api/?method=getOrgs&org=' + orgName +  '&output=json&apikey=7d564591f48e77017a44006bf9e87ffa')
    .map((res:Response) => res.json());
    return result;
  }

  getOrgById(orgId) {
    let x = this.http.get('https://www.opensecrets.org/api/?method=orgSummary&output=json&id=' + orgId + '&apikey=7d564591f48e77017a44006bf9e87ffa')
    .map((res:Response) => res.json());
    return x;
  }



}
