import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnnonceService } from '../Services/annonce.service';

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.page.html',
  styleUrls: ['./details-annonce.page.scss'],
})
export class DetailsAnnoncePage implements OnInit {
  selectedAnnonce: any  ;
  constructor(private activatedRoute: ActivatedRoute,
    private annonceService: AnnonceService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
  
     const annonceId = this.activatedRoute.snapshot.paramMap.get('id');
     this.annonceService.getAnnonceId(annonceId).subscribe({
       next: (response: any) => {
         this.selectedAnnonce = response; 
       },
       error: (err) => {
         console.error(err);
      
       }
     });
  }
  
 
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attontion !',
      message: 'vous voulez vraiment supprimer cette annonce ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.annonceService.deleteAnnonce(this.selectedAnnonce);
            this.router.navigateByUrl('/home');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

}
