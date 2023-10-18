import { Component } from '@angular/core';

import { AnnonceService } from '../Services/annonce.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  annonces :any ;

 constructor (private annonceService : AnnonceService) {}

 ngOnInit(){
  this.annonces=[] ;
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
}
