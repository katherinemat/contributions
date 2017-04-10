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
      this.twitterService.getUser()
      .subscribe(
        data => { console.log(data.response.industries.industry[0]),
        console.log(data.response.industries.industry[0]["@attributes"].industry_name),
        // data => { this.profile = JSON.stringify(data.response.industries),
        error => alert(error) }
      );
    }


}
// loadUser() {
//   this.twitterService.getUser()
//   .subscribe(
//     data => {
//       for(let i in data.response.industries.industry) {
//         console.log(i),
//       }
//     data => this.profile = JSON.stringify(data.response.industries.industry),
//     error => alert(error) }
//   );
// }
