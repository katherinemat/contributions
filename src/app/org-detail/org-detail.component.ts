import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CrpService } from '../crp.service';

// import { Player } from '../player.model';
// import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.css'],
  providers: [CrpService]
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

  constructor(private route: ActivatedRoute, private location: Location, private crpService: CrpService) { }

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
        this.gaveTo527 = data.response.organization["@attributes"].gave_to_527;
        this.gaveToCand = data.response.organization["@attributes"].gave_to_cand;
        this.gaveToPac = data.response.organization["@attributes"].gave_to_pac;
        this.gaveToParty = data.response.organization["@attributes"].gave_to_party;
        this.indivs = data.response.organization["@attributes"].indivs;
        this.lobbying = data.response.organization["@attributes"].lobbying;
        this.membersInvested = data.response.organization["@attributes"].mems_invested;
        this.outside = data.response.organization["@attributes"].outside;
        this.pacs = data.response.organization["@attributes"].pacs;
        this.republicans = data.response.organization["@attributes"].repubs;
        this.democrats = data.response.organization["@attributes"].dems;
        this.soft = data.response.organization["@attributes"].soft;
        this.source = data.response.organization["@attributes"].source;
        this.total527 = data.response.organization["@attributes"].tot527;
        this.total = data.response.organization["@attributes"].total;

        error => alert(error) }
      );
  }

}
