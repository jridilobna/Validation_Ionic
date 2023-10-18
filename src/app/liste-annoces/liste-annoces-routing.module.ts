import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAnnocesPage } from './liste-annoces.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAnnocesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAnnocesPageRoutingModule {}
