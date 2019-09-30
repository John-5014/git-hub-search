import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile.service';
// import {Repository} '../repository-class/repository';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  providers: [ProfileService],
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

 public username = 'john-5014';
 public  getProfileInfo: string;
 user: User;
//  findUser(username){
//    this. getProfileInfo='';
//    this.username=username;
//    this.ngOnInit();
//  }



  constructor(public userRequest: ProfileService, public repoRequest: ProfileService) { }

  ngOnInit() {
    // this.userRequest.users(this.username);
    // this.user=this.userRequest.user;
    // this.repoRequest.use

   }

}
