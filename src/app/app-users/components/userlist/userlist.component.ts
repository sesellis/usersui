import { Component, OnInit } from '@angular/core';
import { UserViewModel } from '../../../Classes/userviewmodel';
import { UserService } from '../../../Services/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  users: UserViewModel[] = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserViewModels().subscribe(data =>{ this.users = data; });
  }

}
