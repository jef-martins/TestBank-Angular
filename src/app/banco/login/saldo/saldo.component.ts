import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  id: any;

  conta: Conta = {
    saldo: 0,
    tipoConta: '',
    nConta: '',
    agencia: ''
  };

  constructor(private loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {

    this.loginService.getUsuarioConta(this.loginService.getId()).subscribe(res => {
      this.conta.saldo = res.data.contas[0].saldo;
      this.loginService.setToken(res.token);
    },
      erro => {
        this._route.navigate(['login'])
      }
    );
  }

}
