import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stock Political Contributions';
  searchquery = '';
  tweetsdata;

  makecall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }
  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }
}
