import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';


import { envvironments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})

export class AuthService {

  private baseUrl = envvironments.baseURL;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User|undefined {
    if (!this.user) return undefined;         //si no coincide un usuario regresa undefiined.
    return structuredClone(this.user);        //genera una copia del usuario sin dar acceso a la base.
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', 'adw45w35.uehr534l.3425jewf') )
      );
  }

  checkAuthentication(): Observable<boolean> {

    if (!localStorage.getItem('token')) return of(false);     //valida si existe un token activo en el localStorage, si no existe hace return false

    const token = localStorage.getItem('token');        //almacena el estado del token del localStorage

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user),                           //doble admiracion es una neagacion de la condicion de arriba (se convierte en true)
        catchError( err => of(false))
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}


