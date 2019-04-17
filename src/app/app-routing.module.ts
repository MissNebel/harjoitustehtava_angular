import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { SavedComponent } from './saved/saved.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component'
import { AuthGaurdService } from './auth-gaurd.service';


const routes: Routes = [
 // { path: '', component: HomeComponent },
  { path: '', component: CompanyComponent, canActivate:[AuthGaurdService] },
  { path: 'saved', component: SavedComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
