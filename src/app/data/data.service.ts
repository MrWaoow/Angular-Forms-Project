import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings):Observable<any>{
    let url = 'https://putsreq.com/VrNzA8GtMAgjfSejwGJX';
    let userRequest = this.http.post(url, userSettings);
    return userRequest;
    // return of(userSettings);
  }
  getSubscriptionTypes():Observable<string[]>{
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}