import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users: any;
  user: User;


  private username: string;

  // tslint:disable-next-line: variable-name
  private access_token = '2c900f56e6f75b8b13eb1311b8aa249da7ffc721';

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: quotemark
    console.log("service is ready");
    this.username = 'john-5014';
    this.access_token = '2c900f56e6f75b8b13eb1311b8aa249da7ffc721';

   }
   getProfileInfo() {
     // tslint:disable-next-line: quotemark
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token + '&access_token=' + this.access_token );
   }

   getProfileRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=' +
    // tslint:disable-next-line: quotemark
    this.access_token + "/repos&access_token=" + this.access_token );
  }
  updateProfile(username: string) {
    this.username = username;
    console.log(username);

  }

   // tslint:disable-next-line: no-trailing-whitespace
   

}

