import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  implements OnInit {


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
  }

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
  */

  login() {

    const foundUser = this.users.find((user: any) => user.email === this.username && user.password === this.password);
    if (foundUser) {
      this.router.navigate(['/liste']);

    } else {
      console.log('Invalid email or password');
    }
  }
  users:any;
  getallusers(){
    this.users=[]
    this.userService.getAllUsers().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.users.push({ id: key, ...response[key] });
        }
        console.log(this.users);
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  ngOnInit(): void {
    this.getallusers()

  }

}
