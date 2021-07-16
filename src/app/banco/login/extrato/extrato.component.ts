import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Extrato } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratos!: Extrato[];
  page = 0;
  anterior = 'disabled';
  proximo = '';


  constructor(private loginService: LoginService, private _route: Router) { }

  ngOnInit(): void {
    this.getExtratos();
  }

  getExtratos() {
    this.loginService.getExtrato(this.loginService.getId(), this.page).subscribe(res => {
      this.extratos = res.data.extratos;
      
      this.loginService.setToken(res.token);
      
      if (this.extratos.length < 10)
        this.proximo = 'disabled';
      else
        this.proximo = '';

      if (this.page === 0)
        this.anterior = 'disabled'
      else
        this.anterior = ''
    },
      erro => {
        this._route.navigate(['login'])
      }
    );
  }

  dataFormatada(data: any) {
    const d = new Date(data);
    return new Intl.DateTimeFormat('pt-BR').format(d);
  }

  Anterior() {

    this.page -= 10;

    this.getExtratos();
  }

  Proximo() {

    this.page += 10;

    this.getExtratos();
  }

}
