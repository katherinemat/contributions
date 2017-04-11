import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService) { }

  stockOpen = [];
  stockHigh = [];
  stockLow = [];
  stockClose = [];

  ngOnInit() {
    // getCompanyStock() {
      this.stockService.getStockInfo()
        .subscribe(
          data => {
            this.stockOpen.push(data["Time Series (Daily)"]["2017-04-10"]["1. open"])
            this.stockHigh.push(data["Time Series (Daily)"]["2017-04-10"]["2. high"])
            this.stockLow.push(data["Time Series (Daily)"]["2017-04-10"]["3. low"])
            this.stockClose.push(data["Time Series (Daily)"]["2017-04-10"]["4. close"])
            error => alert(error)
          }
        )
    // }
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
