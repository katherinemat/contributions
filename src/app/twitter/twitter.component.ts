import { Component, AfterViewInit, Input } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css'],
  providers: [TwitterService]
})
export class TwitterComponent  implements AfterViewInit {
    constructor() {}

    @Input() company;

    ngAfterViewInit () {
            !function(d,s,id){
                var js: any,
                    fjs=d.getElementsByTagName(s)[0],
                    p='https';
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src=p+"://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }
            (document,"script","twitter-wjs");
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
