import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {AllData } from './all-data';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private serverUrl = 'http://localhost:8080/api';
  private dataDb = 'http://www.filltext.com/?rows=100&pretty=true&id={index}&name={business}&address={addressObject}';

  company: Company = new Company();
  submitted = false;

  constructor(private http: HttpClient) { }

  getData(): Observable<AllData> {
    return this.http.get<AllData>(this.dataDb)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllCompanies(): Observable<any> {
    return this.http.get(this.serverUrl + "/companies")
  }

  postCompany(company: Object): Observable<Object> {
    return this.http.post(this.serverUrl + "/add", company)
  }

  newCompany(): void {
    this.submitted = false;
    this.company = new Company();
  }

  save(company) {
    this.postCompany(company).subscribe(
      data => console.log(data), error => console.log(error)
    );
    company = new Company();
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }


}
