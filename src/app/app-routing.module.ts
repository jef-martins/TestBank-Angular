import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './banco/login/home/home.component';
import { AddContaComponent } from './banco/login/add-conta/add-conta.component';
import { LoginComponent } from './banco/login/login.component';
import { SaldoComponent } from './banco/login/saldo/saldo.component';
import { DepositarComponent } from './banco/login/depositar/depositar.component';
import { ExtratoComponent } from './banco/login/extrato/extrato.component';
import { PixComponent } from './banco/login/pix/pix.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "addConta", component: AddContaComponent },
  {
    path: "home/:id", component: HomeComponent,
    children: [
      {path: 'verSaldo', component: SaldoComponent},
      {path: 'deposito', component: DepositarComponent},
      {path: 'extrato', component: ExtratoComponent},
      {path: 'pix', component: PixComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
