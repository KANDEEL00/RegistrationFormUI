import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.BASE_URL}/User`;
  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    const userDto = user;
    return this.http.post<User>(this.apiUrl, { userDto });
  }
}
