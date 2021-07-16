import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  conta: Conta = {
    saldo: 0,
    tipoConta: '',
    nConta: '',
    agencia: ''
  };

  saldo = 0;

  constructor(private loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {
    this.loginService.getUsuarioConta(this.loginService.getId()).subscribe(res => {
      this.conta.idConta = res.data.contas[0].idConta;
      this.conta.saldo = res.data.contas[0].saldo;
      this.conta.tipoConta = res.data.contas[0].tipoConta;
      this.conta.nConta = res.data.contas[0].nConta;
      this.conta.agencia = res.data.contas[0].agencia;
      this.conta.fkUsuario = res.data.contas[0].fkUsuario;
      this.loginService.setToken(res.token);
    },
      erro => {
        this._route.navigate(['login'])
      }
    );

  }

  depositar() {
    this.conta.descricao = "Deposito Mesma Conta  - Valor: " + this.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.conta.saldo = (this.saldo + this.conta.saldo)
    this.loginService.depositoConta(this.conta).subscribe(res => {

      this.loginService.setToken(res.token);
      this._route.navigate(['home/' + this.loginService.getId() + '/verSaldo'])
    },
      erro => {
        this._route.navigate(['login'])
      }
    );
  }

  enter(e: any) {
    if (e.charCode === 13)
      this.depositar()
  }

}
