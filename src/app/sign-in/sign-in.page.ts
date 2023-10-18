import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  {

 
  username: string = "";
  password: string = "";
 

  constructor(private router: Router, private userService: UsersService) {}
  
 
 /* login() {
    const isAuthenticated = this.userService.signIn(this.username, this.password);
    if (isAuthenticated) {
      this.router.navigateByUrl("/liste");
    } else {
      console.log("Authentication failed");
      this.router.navigateByUrl("/home");
    }
  }*/
  login(formData: NgForm) {
    const username = formData.value.username;
    const password = formData.value.password;

    this.userService.signIn(username, password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        console.log(username, password);
        this.router.navigateByUrl('/liste');
      } else {
        console.log('Authentication failed');
        this.router.navigateByUrl('/home');
      }
    });
  }

}