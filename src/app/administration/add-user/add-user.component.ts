import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  registerForm!: FormGroup;
  roles = ['Admin', 'User', 'Guest'];
  constructor(private userService: UsersService, private formBuilder: FormBuilder,private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }
   
  onSubmit() {
    console.log(this.registerForm.value);
    this.userService.addUser(this.registerForm.value)
    .subscribe(p => {
      console.log(p);
      if(p.isSuccess)
      {
        this.router.navigate(['/all-users']);
      }
    });
  }
  get form() {
    return this.registerForm.controls;
  }
}
