import { Component, Input, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { OrgDetailComponent } from '../org-detail/org-detail.component';

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
  orgSymbol = [];
  flimm = [];

  @Input() company;
  ngOnInit() {
    setTimeout(() => {console.log(this.company);
    this.stockService.getOrgSymbol(this.company)
    .subscribe(
      data => {
        this.orgSymbol.push(data[0].company_symbol);
        console.log(this.orgSymbol[0]);
        this.stockService.getStockInfo(this.orgSymbol[0])
        .subscribe(
          data => {
            this.stockOpen.push(data["Time Series (Daily)"]["2017-04-10"]["1. open"])
            this.stockHigh.push(data["Time Series (Daily)"]["2017-04-10"]["2. high"])
            this.stockLow.push(data["Time Series (Daily)"]["2017-04-10"]["3. low"])
            this.stockClose.push(data["Time Series (Daily)"]["2017-04-10"]["4. close"])
            error => alert(error)
          }
        )
      }
    )
  }, 300);
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
