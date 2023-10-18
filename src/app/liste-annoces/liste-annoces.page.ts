import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../Services/annonce.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-liste-annoces',
  templateUrl: './liste-annoces.page.html',
  styleUrls: ['./liste-annoces.page.scss'],
})
export class ListeAnnocesPage implements OnInit {

  annonces :any ;
users:any;
  constructor (private annonceService : AnnonceService , private userService :UsersService) {}
 
  ngOnInit(){
   
  }
   
  getofAllAnnonce(){
    this.annonces=[];
    this.annonceService.getAllAnnonces().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.annonces.push({ id: key, ...response[key] });
        }
        console.log(this.annonces);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  getofAllUser(){
    this.users=[];
    this.userService.allusers().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.users.push({ id: key, ...response[key] });
        }
        console.log(this.users);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
  }

