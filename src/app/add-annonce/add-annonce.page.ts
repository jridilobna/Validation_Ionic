import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../Services/annonce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  title:string ='';
  description:string='';
  categorie:string='';
  owner:string='';
  image:string='';
  contact:string='';

  constructor( private annoncService:AnnonceService , private router : Router) { }
  
  
  
  ngOnInit() {
  }
 
  add() {
    let newannonce = {
      title:this.title,
      description: this.description,
      categorie: this.categorie,
      owner :this.owner,
      image:this.image,
      contact:this.contact};
    

    this.annoncService.addAnnonce(newannonce).subscribe({
      next: (response) => {
        console.log('Annonce Created With success ', response); 
        this.router.navigateByUrl('/liste')
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
   

  }

  
}
