import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-users.component.html'
})
export class AllUsersComponent {
  usersList!: any[];
  constructor(private userService:UsersService) { 
    this.userService.getAllUsers()
    .subscribe(p=>{
      this.usersList=p;
    });
  }
}
