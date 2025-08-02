import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private rutaApi: any = 'http://localhost:8081';

  constructor(private http: HttpClient) {

  }

  registerUser(usuario: User): Observable<any>{
    return this.http.post(`${this.rutaApi}/auth/users/register`, usuario);
  }
}
