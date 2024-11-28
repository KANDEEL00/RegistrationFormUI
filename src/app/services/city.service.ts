import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { City } from '../../shared/models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = `${environment.BASE_URL}/City`;
  constructor(private http: HttpClient) {}

  getCities(govID: number): Observable<City[]> {
    const url = `${this.apiUrl}?GovernateID=${govID}`;
    return this.http.get<City[]>(url);
  }
}
