import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://reqres.in/api/';
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}users?per_page=6&delay=3`).pipe(
      map((response: any) => {
        let data: User[];

        data = [...response.data];

        return data;
      })
    );
  }

  getUserByID(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${id}`).pipe(
      map((response: any) => {
        let data: User;

        data = { ...response.data };

        return data;
      })
    );
  }
}
