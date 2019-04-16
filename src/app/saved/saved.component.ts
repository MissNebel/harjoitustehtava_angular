import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  SavedData: any = [];

  constructor(public service: CompanyService) { }

  ngOnInit() {
    this.showSavedData();
  }

  showSavedData() {
    return this.service.getAllCompanies().subscribe((data: {}) => {
      this.SavedData = data;
      console.log(this.SavedData);
    })
  }

}
