import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log = false;
  usuario: Usuario = {
    nome:'',
    cpf:'',
    senha:''
  }

  constructor(private loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {
  }

  logar(){
    this.loginService.getUsuario(this.usuario).subscribe(res =>{
      this.loginService.setToken(res.token);
      this._route.navigate(['home/'+res.idUsuario])
    },
    (erro)=>{
      console.log("erro",erro);
        this.log = true;
        this.usuario.cpf = '';
        this.usuario.senha = '';
    });   
  }

  enter(e: any){
    if(e.charCode === 13)
      this.logar()
  }

}
