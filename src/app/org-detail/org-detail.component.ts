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
  orgToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private crpService: CrpService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.orgId = urlParameters['id'];
    });
    this.orgToDisplay = this.crpService.getOrgById(this.orgId);
  }

}
