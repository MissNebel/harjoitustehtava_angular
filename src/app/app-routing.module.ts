import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  { path: '', component: CompanyComponent },
  { path: 'saved', component: SavedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
