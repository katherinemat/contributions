import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CrpService {
  constructor (
    private http: Http
  ) {}

  getOrgIds(orgName) {
    let result = this.http.get('https://www.opensecrets.org/api/?method=getOrgs&org=' + orgName +  '&output=json&apikey=6b4ad75be498af7239f6ff551d3d4362')
    .map((res:Response) => res.json());
    return result;
  }

  getOrgContributions(orgId) {
    let x = this.http.get('https://www.opensecrets.org/api/?method=orgSummary&output=json&id=' + orgId + '&apikey=6b4ad75be498af7239f6ff551d3d4362')
    .map((res:Response) => res.json());
    return x;
  }

  getOrgById(orgId) {
    console.log("not done yet");
  }

}
