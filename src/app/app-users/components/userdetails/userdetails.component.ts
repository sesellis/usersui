import { Component, OnInit } from '@angular/core';
import { UserViewModel } from '../../../Classes/userviewmodel';
import { UserService } from '../../../Services/users.service';
import { User } from '../../../Classes/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User
  constructor(private userService: UserService, 
    private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(data =>{ this.user = data; });
  }

}
