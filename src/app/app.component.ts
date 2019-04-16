import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Companies';

  items: MenuItem[];

  ngOnInit() {

    this.items = [
      {label: 'Companies', routerLink: ['']},
      {label: 'Saved', routerLink: ['/saved']}
    ]
  }
  

}
