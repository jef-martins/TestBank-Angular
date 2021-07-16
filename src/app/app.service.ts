import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Banco } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8081/usuario/";

  constructor(private http: HttpClient) { }

  createBanco(request: Banco):Observable<any>{
    return this.http.post(this.url, request);
  }

  getAllBanco():Observable<Banco[]>{
    return this.http.get<Banco[]>(this.url);
  }

  getOneBanco(id: number):Observable<Banco>{
    return this.http.get<Banco>(this.url+id);
  }
  getusuario(id: number):Observable<Banco>{
    return this.http.get<Banco>(this.url+"logar/"+id);
  }

  update(id: number, request: Banco):Observable<Banco>{
    return this.http.put<Banco>(this.url+id, request);
  }

  delete(id: number):Observable<any>{
    return this.http.delete(this.url+id);
  }
}
