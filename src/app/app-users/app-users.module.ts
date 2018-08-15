import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/userlist/userlist.component';
import { UserDetailsComponent } from './components/userdetails/userdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ UserListComponent, UserDetailsComponent ]
})
export class AppUsersModule { }
