import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly apiUrl = 'https://localhost:7266/api/';
  constructor(private http: HttpClient) { }

  getCustomer(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + 'Customer/All');
  }

}
