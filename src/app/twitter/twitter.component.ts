import { Component } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [TwitterService]
})
export class TwitterComponent {
  constructor(private twitterService: TwitterService) {}
  profile = {};

  

  loadUser() {
    this.twitterService.getUser().subscribe(data => this.profile = data);

  }


}
