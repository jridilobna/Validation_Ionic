import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }
  
  getAllAnnonces(){
    //return this.allannonces ;
    return this.http.get('https://ionic-85bc7-default-rtdb.firebaseio.com/Annonce.json');
  }
  getAnnonceId(id: any ) {
   // return this.allannonces.find((element) => element.id == id);
   return this.http.get(`https://ionic-85bc7-default-rtdb.firebaseio.com/Annonce/${id}.json`)
  }
  addAnnonce(newAnnonce:any ) {
    return this.http.post('https://ionic-85bc7-default-rtdb.firebaseio.com/Annonce.json',newAnnonce);
   /* newAnnonce.id = this.allannonces[this.allannonces.length - 1].id + 1;
    this.allannonces.push(newAnnonce);*/
  }
  deleteAnnonce(id :any) {
   // let i = this.allannonces.indexOf(annonce);
   // this.allannonces.splice(i, 1);
  return this.http.delete(`https://ionic-85bc7-default-rtdb.firebaseio.com/Annonce/${id}.json`)
  }

}
