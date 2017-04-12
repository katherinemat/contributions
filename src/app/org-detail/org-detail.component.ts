import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrpService } from '../crp.service';
import { UserService } from '../user.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Stock } from '../stock.model';


// import { Player } from '../player.model';
// import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.css'],
  providers: [CrpService, UserService]
})
export class OrgDetailComponent implements OnInit {

  orgId: string;
  orgToDisplay: string;
  cycle: string;
  dems: string;
  gaveTo527: string;
  gaveToCand: string;
  gaveToPac: string;
  gaveToParty: string;
  indivs: string;
  lobbying: string;
  membersInvested: string;
  outside: string;
  pacs: string;
  republicans: string;
  democrats: string;
  soft: string;
  source: string;
  total527: string;
  total: string;

  constructor(private route: ActivatedRoute, private location: Location, private crpService: CrpService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.orgId = urlParameters['id'];
    });
    // this.orgToDisplay = this.crpService.getOrgById(this.orgId);

    this.crpService.getOrgById(this.orgId)
    .subscribe(
      data => {
        this.orgId = data.response.organization["@attributes"].orgid;
        this.orgToDisplay = data.response.organization["@attributes"].orgname;
        this.cycle = data.response.organization["@attributes"].cycle;
        this.gaveTo527 = data.response.organization["@attributes"].gave_to_527.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.gaveToCand = data.response.organization["@attributes"].gave_to_cand.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.gaveToPac = data.response.organization["@attributes"].gave_to_pac.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.gaveToParty = data.response.organization["@attributes"].gave_to_party.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.indivs = data.response.organization["@attributes"].indivs.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.lobbying = data.response.organization["@attributes"].lobbying.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.membersInvested = data.response.organization["@attributes"].mems_invested;
        this.outside = data.response.organization["@attributes"].outside;
        this.pacs = data.response.organization["@attributes"].pacs;
        this.republicans = data.response.organization["@attributes"].repubs.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.democrats = data.response.organization["@attributes"].dems.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.soft = data.response.organization["@attributes"].soft;
        this.source = data.response.organization["@attributes"].source;
        this.total527 = data.response.organization["@attributes"].tot527;
        this.total = data.response.organization["@attributes"].total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        error => alert(error) }
      );
  }

  addStock(name: string, total: string, republicans: string, democrats: string, indivs: string, pacs: string, cycle: string) {
    var newStock: Stock = new Stock(name, total, republicans, democrats, indivs, pacs, cycle);
    this.userService.addStockToFirebase(newStock);
  }

}
