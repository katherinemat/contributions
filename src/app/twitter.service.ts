import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {
  constructor (private http: Http) {}



  getUser() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization','Bearer ');
    headers.append('Authorization','OAuth oauth_consumer_key=&quot;DC0sePOBbQ8bYdC8r4Smg&quot;,oauth_signature_method=&quot;HMAC-SHA1&quot;,oauth_timestamp=&quot;1491859427&quot;,oauth_nonce=&quot;570671100&quot;,oauth_version=&quot;1.0&quot;,oauth_token=&quot;1158201306-jWy7Lk2yjj89HzbOSbgJaTGuxrZNY848uuHSXhu&quot;,oauth_signature=&quot;wGTIU7%2BUrvUNx9%2FzpqK9ARtoG68%3D&quot ');
    return this.http.get("https://api.twitter.com/1.1/search/tweets.json?q=puppies", { headers: headers })
                    .map(this.extractData)
                    .subscribe(data =>{ console.log(data)})
                    .catch(this.handleError)
                 }

    // let x =  this.http.get(`https://api.twitter.com/1.1/search/tweets.json?q=puppies`)
    // .map((res:Response) => res.json());
    // console.log(x);
    // return x;


}
