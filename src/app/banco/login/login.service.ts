import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta, Usuario } from './login.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:8082/";
  token = '';
  id = 0;
  

  constructor(private http: HttpClient) { }

  getUsuario(request: Usuario):Observable<Usuario>{
    return this.http.post<any>(this.url+"usuario/logar/", request);
  }

  createUsuario(request: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url+"usuario/", request);
  }

  getUsuarioConta(id: number):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );

    return this.http.get<any>(this.url+"usuario/"+id, { headers: headers });
  }

  getExtrato(id: number, page: number):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );

    return this.http.get<any>(this.url+"conta/"+id+"/"+page, { headers: headers });
  }

  depositoConta(request: Conta):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}` );

    return this.http.put<any>(this.url+"conta/"+this.id, request, { headers: headers });
  }

  setToken(token: any){
    this.token = token;
  }

  getToken():string {
    return this.token;
  }

  setId(id: any){
    this.id = id;
  }

  getId():number {
    return this.id;
  }

}
