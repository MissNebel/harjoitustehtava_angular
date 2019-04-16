import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  AllData: any = []
  DbData: any = []

  constructor(public service: CompanyService) { }

  ngOnInit() {
    this.showAllData();
  }

  showAllData() {
    return this.service.getData().subscribe((data: {}) => {
      this.AllData = data;
      console.log(this.AllData);
    })
  }

  showDbData() {
    return this.service.getAllCompanies().subscribe((companies: {}) => {
      this.DbData = companies;
    })
  }

  addCompany(company) {
    this.service.submitted = true;
    this.service.save(company); 
  }

}
