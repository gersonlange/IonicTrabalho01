import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

const apiUrl = 'http://private-068ee-ionic2.apiary-mock.com/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id;

  constructor(public http: Http) {}

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getDados(type) {
    console.log(apiUrl + type);
    return this.http.get(apiUrl + type);
  }
}
