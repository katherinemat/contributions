import { Component } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent {

  constructor(private stockService: StockService) { }

  getCompanyStock() {
    this.stockService.getStockInfo()
      .subscribe(
        data => {
          console.log(data)
          error => alert(error)
        }
      )
  }
}







  // getDonations(companyInput) {
  //   this.crpService.getOrgIds(companyInput)
  //   .subscribe(
  //     data => {
  //       for (var i = 0; i < data.response.organization.length; i++){
  //         this.orgs.push(data.response.organization[i]["@attributes"].orgid)
  //         this.crpService.getOrgContributions(data.response.organization[i]["@attributes"].orgid)
  //         .subscribe(
  //           data => {
  //             this.donations.push(data.response.organization["@attributes"].orgname)
  //             error => alert(error) }
  //           );
  //         }
  //       }
  //       // error => alert(error) }
  //
  //       // for (var i = 0; i < )
  //     );




  // ngOnInit() {
  // }
