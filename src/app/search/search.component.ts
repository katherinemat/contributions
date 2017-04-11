  import { Component } from '@angular/core';
  import { CrpService } from '../crp.service';
  import { Org } from '../org.model';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    providers: [CrpService]
  })
  export class SearchComponent {
    constructor(private router: Router, private crpService: CrpService) {}
    orgs = [];

    getDonations(companyInput) {
      this.crpService.getOrgIds(companyInput)
      .subscribe(
        data => {
          for (var i = 0; i < data.response.organization.length; i++){
            this.crpService.getOrgById(data.response.organization[i]["@attributes"].orgid)
            .subscribe(
              data => {
                let name = data.response.organization["@attributes"].orgname
                let id = data.response.organization["@attributes"].orgid
                let newOrg = new Org(name, id)
                this.orgs.push(newOrg)
                error => alert(error) }
              );
            }
          }
        );


      }

      seeOrgDetail(clickedOrgId) {
        this.router.navigate(['org', clickedOrgId]);
      }
    }
