import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss'],
})
export class SignupPage {
  constructor(private UserService :UsersService , private router: Router) {}
 lastname: string="";
  firstname: string="";
  email: string="";
  password: string="";
  confirmpassword: string="";


  addUser() {
    let newUser = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,

    };

    this.UserService.signUp(newUser).subscribe({
      next: (response) => {
        console.log('User Created With success ', response);
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
    this.router.navigateByUrl('/home')

  }

}
