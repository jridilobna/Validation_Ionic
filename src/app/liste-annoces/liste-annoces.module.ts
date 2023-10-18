import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAnnocesPageRoutingModule } from './liste-annoces-routing.module';

import { ListeAnnocesPage } from './liste-annoces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAnnocesPageRoutingModule
  ],
  declarations: [ListeAnnocesPage]
})
export class ListeAnnocesPageModule {}
