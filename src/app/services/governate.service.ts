import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Governate } from '../../shared/models/governate';

@Injectable({
  providedIn: 'root',
})
export class GovernateService {
  private apiUrl = `${environment.BASE_URL}/Governate`;

  constructor(private http: HttpClient) {}

  getGovernates(): Observable<Governate[]> {
    return this.http.get<Governate[]>(this.apiUrl);
  }
}
