import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './banco/login/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './banco/login/login.component';
import { AddContaComponent } from './banco/login/add-conta/add-conta.component';
import { SaldoComponent } from './banco/login/saldo/saldo.component';
import { DepositarComponent } from './banco/login/depositar/depositar.component';
import { ExtratoComponent } from './banco/login/extrato/extrato.component';
import { PixComponent } from './banco/login/pix/pix.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddContaComponent,
    SaldoComponent,
    DepositarComponent,
    ExtratoComponent,
    PixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
