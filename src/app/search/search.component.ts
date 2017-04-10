import { Component } from '@angular/core';
import { CrpService } from '../crp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [CrpService]
})
export class SearchComponent {
  constructor(private crpService: CrpService) {}
  donations = [];
  orgs = [];

  getDonations(companyInput) {
    this.crpService.getOrgIds(companyInput)
    .subscribe(
      data => {
        for (var i = 0; i < data.response.organization.length; i++){
          this.orgs.push(data.response.organization[i]["@attributes"].orgid)
          this.crpService.getOrgContributions(data.response.organization[i]["@attributes"].orgid)
          .subscribe(
            data => {
              this.donations.push(data.response.organization["@attributes"].orgname)
              error => alert(error) }
            );
          }
        }
        // error => alert(error) }

        // for (var i = 0; i < )
      );


    }
  }
