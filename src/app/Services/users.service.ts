import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http :HttpClient) { }
 allusers :any ;

  signUp(user :any){
   return this.http.post(`https://ionic-85bc7-default-rtdb.firebaseio.com/User.json`,user)
  }

  getAllUsers() {
    return this.http.get('https://ionic-85bc7-default-rtdb.firebaseio.com/User.json');
  }

  /*signIn(username: string, password: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        return user !== undefined;
      })
    );
  }
  */



 }



