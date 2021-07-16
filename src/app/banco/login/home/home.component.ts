import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Usuario, Conta } from '../login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: any;
  usuario: Usuario = {
    nome: '',
    cpf: ''
  };

  conta: Conta = {
    saldo: 0,
    tipoConta: '',
    nConta: '',
    agencia: ''
  };

  constructor(private loginService: LoginService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loginService.setId(this.id);

    this.loginService.getUsuarioConta(this.id).subscribe(res => {
      this.usuario.foto = res.data.foto;
      this.usuario.nome = res.data.nome;
      this.usuario.cpf = res.data.nome;
      this.conta.saldo = res.data.contas[0].saldo;
      this.conta.tipoConta = res.data.contas[0].tipoConta;
      this.conta.nConta = res.data.contas[0].nConta;
      this.conta.agencia = res.data.contas[0].agencia;
      this.loginService.setToken(res.token);
    },
      (erro) => {
        this._route.navigate(['login'])
      });
  }

  logout(){
    this.loginService.setToken('');
    this._route.navigate(['login'])
  }
}
