import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; 
// import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Companies';

  items: MenuItem[];

  // constructor(private loginservice: AuthenticationService) {}

  ngOnInit() {

   this.items = [
    {label: 'Companies', routerLink: ['']},
    {label: 'Saved', routerLink: ['/saved']},
    {label: 'Log Out', routerLink: ['/logout']}
   ]

  }

  // getItems() {
  //   let a;
    
  //   if (!this.loginservice.isUserLoggedIn()) {
  //     if(this.items.length != 2) {
  //       console.log("hep");
  //       this.items = [{label: 'Companies', routerLink: ['']},
  //       {label: 'Saved', routerLink: ['/saved']}]
  //     } 
  //     } else {
  //       if(this.items.length != 3) {
  //       this.items = [ {label: 'Companies', routerLink: ['']},
  //       {label: 'Saved', routerLink: ['/saved']},
  //       {label: 'Log Out', routerLink: ['/logout']}]
  //       }
  //     }
  //     return this.items; 
  //   } 



}
