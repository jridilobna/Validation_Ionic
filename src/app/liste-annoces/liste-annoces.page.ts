import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../Services/annonce.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute,  Router } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-liste-annoces',
  templateUrl: './liste-annoces.page.html',
  styleUrls: ['./liste-annoces.page.scss'],
})
export class ListeAnnocesPage implements OnInit {
 
 // selectedAnnonce: any  ;
  constructor(private activatedRoute: ActivatedRoute,
    private userService :UsersService ,
    private annonceService: AnnonceService,
    private alertCtrl: AlertController,
    private router: Router) { }
    annonceId= this.activatedRoute.snapshot.paramMap.get('id');
  ngOnInit() {
   this.getAllAnnonces();
   const userId= '1'
   this.getAnnoncesByUser(userId)
    
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Attontion !',
      message: 'vous voulez vraiment supprimer cette annonce ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.annonceService.deleteAnnonce(this.annonceId).subscribe(
              {
                next:(response)=>{
                  console.log("annonce deleted succsafuly")
                  this.router.navigateByUrl('/home')
                },
                error:(err) =>{
                   console.log(err)
                }
              }
            );
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

//////////////////////////////////
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

annonces :any ;
getAllAnnonces(){
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
    annonceByUser:any 
  getAnnoncesByUser(userId :string) {

    this.annonceByUser = this.annonces.filter((annonce:any) => annonce.userId === userId);
    
    }
  }

  

