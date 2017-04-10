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
    donations = {};

    getDonations() {
      this.crpService.getUser()
      .subscribe(
        data => { console.log(data.response.industries.industry[0]),
        console.log(data.response.industries.industry[2]["@attributes"].industry_name),
        this.donations = JSON.stringify(data.response.industries.industry[2]["@attributes"].industry_name),
        error => alert(error) }
      );
    }


}
