import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../company.service';
import { SortEvent } from 'primeng/api';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  AllData: any = [];
  cols: any[];

  constructor(public service: CompanyService) { }

  ngOnInit() {
    this.showAllData();

  //   this.cols = [
  //     { field: 'name', header: 'Name' },
  //     { field: 'address.address', header: 'Address' },
  //     { field: 'address.city', header: 'City' },
  //     { field: 'address.state', header: 'State' },
  //     { field: 'address.zip', header: 'Zip' }
  // ];
  }

  showAllData() {
    return this.service.getData().subscribe((data: {}) => {
      this.AllData = data;
      console.log(this.AllData);
    })
  }

  addCompany(company) {
    this.service.submitted = true;
    this.service.save(company); 
  }

}
